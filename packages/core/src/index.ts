import Rest from "./Rest.js";
import type GetTokenRequest from "./definitions/GetTokenRequest.js";
import type TokenInfo from "./definitions/TokenInfo.js";
import Restapi from "./paths/Restapi/index.js";
import Scim from "./paths/Scim/index.js";
import type SdkExtension from "./SdkExtension.js";
import Analytics from "./paths/Analytics/index.js";
import Ai from "./paths/Ai/index.js";
import Rcvideo from "./paths/Rcvideo/index.js";
import Webinar from "./paths/Webinar/index.js";
import type RestException from "./RestException.js";
import type {
  RestMethod,
  RestOptions,
  RestRequestConfig,
  RestResponse,
  RingCentralInterface,
} from "./types";
import TeamMessaging from "./paths/TeamMessaging/index.js";

interface JwtFlowOptions {
  jwt: string;
}
interface PasswordFlowOptions {
  username: string;
  extension?: string;
  password: string;
}
interface AuthCodeFlowOptions {
  code: string;
  redirect_uri: string;
  code_verifier?: string;
}

interface Logger {
  debug: Function;
  log: Function;
  info: Function;
  warn: Function;
  error: Function;
}

class RingCentral implements RingCentralInterface {
  public static config: { logger: Logger } = {
    logger: {
      debug: () => {},
      log: () => {},
      info: () => {},
      warn: () => {},
      error: () => {},
    },
  };

  public sdkExtensions: SdkExtension[] = [];

  public rest: Rest;

  public constructor(restOptions?: RestOptions) {
    this.rest = new Rest(restOptions ?? {});
  }

  public async installExtension(sdkExtension: SdkExtension) {
    await sdkExtension.install(this);
    this.sdkExtensions.push(sdkExtension);
  }

  public get token() {
    return this.rest.token;
  }

  public set token(token) {
    this.rest.token = token;
  }

  public async request<T>(
    method: RestMethod,
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig,
  ): Promise<RestResponse<T>> {
    try {
      const r = await this.rest.request<T>(
        method,
        endpoint,
        content,
        queryParams,
        config,
      );
      RingCentral.config.logger.info(
        `[${
          new Date().toLocaleString()
        } HTTP ${method} ${r.status} ${r.statusText}] ${this.rest.server} ${endpoint}`,
      );
      return r;
    } catch (e) {
      const re = e as RestException;
      if (re.response) {
        const r = re.response;
        RingCentral.config.logger.info(
          `[${
            new Date().toLocaleString()
          } HTTP ${method} ${r.status} ${r.statusText}] ${this.rest.server} ${endpoint}`,
        );
      }
      throw e;
    }
  }

  public async get<T>(
    endpoint: string,
    queryParams?: {},
    config?: RestRequestConfig,
  ): Promise<RestResponse<T>> {
    return this.request<T>("GET", endpoint, undefined, queryParams, config);
  }

  public async delete<T>(
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig,
  ): Promise<RestResponse<T>> {
    return this.request<T>("DELETE", endpoint, content, queryParams, config);
  }

  public async post<T>(
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig,
  ): Promise<RestResponse<T>> {
    return this.request<T>("POST", endpoint, content, queryParams, config);
  }

  public async put<T>(
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig,
  ): Promise<RestResponse<T>> {
    return this.request<T>("PUT", endpoint, content, queryParams, config);
  }

  public async patch<T>(
    endpoint: string,
    content: {},
    queryParams?: {},
    config?: RestRequestConfig,
  ): Promise<RestResponse<T>> {
    return this.request<T>("PATCH", endpoint, content, queryParams, config);
  }

  public async getToken(getTokenRequest: GetTokenRequest): Promise<TokenInfo> {
    getTokenRequest.client_id = this.rest.clientId;
    this.token = await this.restapi(null).oauth().token().post(getTokenRequest);
    return this.token;
  }

  public async authorize(
    options: PasswordFlowOptions | AuthCodeFlowOptions | JwtFlowOptions,
  ): Promise<TokenInfo> {
    const getTokenRequest: GetTokenRequest = {};
    if ("username" in options) {
      console.warn(
        "Username/password authentication is deprecated. Please migrate to the JWT grant type.",
      );
      getTokenRequest.grant_type = "password";
      getTokenRequest.username = options.username;
      getTokenRequest.extension = options.extension;
      getTokenRequest.password = options.password;
    } else if ("code" in options) {
      getTokenRequest.grant_type = "authorization_code";
      getTokenRequest.code = options.code;
      getTokenRequest.redirect_uri = options.redirect_uri;
      // PKCE: https://medium.com/ringcentral-developers/use-authorization-code-pkce-for-ringcentral-api-in-client-app-e9108f04b5f0
      getTokenRequest.code_verifier = options.code_verifier;
    } else if ("jwt" in options) {
      getTokenRequest.grant_type =
        "urn:ietf:params:oauth:grant-type:jwt-bearer";
      getTokenRequest.assertion = options.jwt;
    } else {
      throw new Error("Unsupported authorization flow");
    }
    return this.getToken(getTokenRequest);
  }

  /**
   * Just a synonym of authorize
   */
  public async login(
    options: PasswordFlowOptions | AuthCodeFlowOptions | JwtFlowOptions,
  ): Promise<TokenInfo> {
    return this.authorize(options);
  }

  /**
   * Each time you call token endpoint using this flow, you continue current client session, and receive a new token pair: access token and refresh token in response to this request.
   * The old token pair immediately becomes inactive.
   *
   * https://developers.ringcentral.com/api-reference/Get-Token
   *
   * @param refreshToken Refresh Token
   */
  public async refresh(refreshToken?: string): Promise<TokenInfo> {
    const tokenToRefresh = refreshToken ?? this.token?.refresh_token;
    if (!tokenToRefresh) {
      throw new Error("tokenToRefresh must be specified.");
    }
    const getTokenRequest: GetTokenRequest = {};
    getTokenRequest.grant_type = "refresh_token";
    getTokenRequest.refresh_token = tokenToRefresh;
    return this.getToken(getTokenRequest);
  }

  /**
   * Each time you call token endpoint using this flow, you continue current client session, and receive a new token pair: access token and refresh token in response to this request.
   * The old token pair immediately becomes inactive.
   *
   * https://developers.ringcentral.com/api-reference/Revoke-Token
   *
   * @param tokenToRevoke AccessToken
   */
  public async revoke(tokenToRevoke?: string) {
    for (const sdkExtension of this.sdkExtensions) {
      await sdkExtension.revoke();
    }
    if (!tokenToRevoke && !this.token) {
      // nothing to revoke
      return;
    }
    if (!this.rest.clientId) {
      // if no clientId, the token is from external source, cannot revoke
      // no clientSecret is fine, since PKCE doesn't have clientSecret
      return;
    }
    const temp = tokenToRevoke ?? this.token?.access_token ??
      this.token?.refresh_token;
    await this.restapi(null)
      .oauth()
      .revoke()
      .post({ token: temp, client_id: this.rest.clientId } as any); // todo: spec doesn't allow client_id
    this.token = undefined;
  }

  public restapi(apiVersion: string | null = "v1.0"): Restapi {
    return new Restapi(this, apiVersion);
  }

  public scim(version: string | null = "v2"): Scim {
    return new Scim(this, version);
  }

  public analytics(): Analytics {
    return new Analytics(this);
  }

  public teamMessaging(): TeamMessaging {
    return new TeamMessaging(this);
  }

  public ai(): Ai {
    return new Ai(this);
  }

  public rcvideo(): Rcvideo {
    return new Rcvideo(this);
  }

  public webinar(): Webinar {
    return new Webinar(this);
  }
}

export default RingCentral;
