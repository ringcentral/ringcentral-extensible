import Rest from './Rest';
import GetTokenRequest from './definitions/GetTokenRequest';
import TokenInfo from './definitions/TokenInfo';
import Restapi from './paths/Restapi';
import Scim from './paths/Scim';
import SdkExtension from './SdkExtension';
import Analytics from './paths/Analytics';
import RestException from './RestException';
import {
  RestRequestConfig, RestResponse, RingCentralInterface, RestMethod,
  RestOptions,
} from './types';

type JwtFlowOptions = {
  jwt: string;
};
type PasswordFlowOptions = {
  username: string;
  extension?: string;
  password: string;
};
type AuthCodeFlowOptions = {
  code: string;
  redirect_uri: string;
  code_verifier?: string;
};

interface Logger {
  debug: Function;
  log: Function;
  info: Function;
  warn: Function;
  error: Function;
}

class RingCentral implements RingCentralInterface {
  static config: { logger: Logger } = {
    logger: {
      debug: () => { },
      log: () => { },
      info: () => { },
      warn: () => { },
      error: () => { },
    },
  };

  sdkExtensions: SdkExtension[] = [];

  rest: Rest;

  constructor(restOptions?: RestOptions) {
    this.rest = new Rest(restOptions ?? {});
  }

  async installExtension(sdkExtension: SdkExtension) {
    await sdkExtension.install(this);
    this.sdkExtensions.push(sdkExtension);
  }

  get token() {
    return this.rest.token;
  }

  set token(token) {
    this.rest.token = token;
  }

  async request<T>(
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
        `[${new Date().toLocaleString()} HTTP ${method} ${r.status} ${r.statusText
        }] ${this.rest.server} ${endpoint}`,
      );
      return r;
    } catch (e) {
      const re = e as RestException;
      if (re.response) {
        const r = re.response;
        RingCentral.config.logger.info(
          `[${new Date().toLocaleString()} HTTP ${method} ${r.status} ${r.statusText
          }] ${this.rest.server} ${endpoint}`,
        );
      }
      throw e;
    }
  }

  async get<T>(
    endpoint: string,
    queryParams?: {},
    config?: RestRequestConfig,
  ): Promise<RestResponse<T>> {
    return this.request<T>('GET', endpoint, undefined, queryParams, config);
  }

  async delete<T>(
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig,
  ): Promise<RestResponse<T>> {
    return this.request<T>('DELETE', endpoint, content, queryParams, config);
  }

  async post<T>(
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig,
  ): Promise<RestResponse<T>> {
    return this.request<T>('POST', endpoint, content, queryParams, config);
  }

  async put<T>(
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig,
  ): Promise<RestResponse<T>> {
    return this.request<T>('PUT', endpoint, content, queryParams, config);
  }

  async patch<T>(
    endpoint: string,
    content: {},
    queryParams?: {},
    config?: RestRequestConfig,
  ): Promise<RestResponse<T>> {
    return this.request<T>('PATCH', endpoint, content, queryParams, config);
  }

  async getToken(getTokenRequest: GetTokenRequest): Promise<TokenInfo> {
    getTokenRequest.client_id = this.rest.clientId;
    this.token = await this.restapi(null).oauth().token().post(getTokenRequest);
    return this.token;
  }

  async authorize(
    options: PasswordFlowOptions | AuthCodeFlowOptions | JwtFlowOptions,
  ): Promise<TokenInfo> {
    const getTokenRequest: GetTokenRequest = {};
    if ('username' in options) {
      getTokenRequest.grant_type = 'password';
      getTokenRequest.username = options.username;
      getTokenRequest.extension = options.extension;
      getTokenRequest.password = options.password;
    } else if ('code' in options) {
      getTokenRequest.grant_type = 'authorization_code';
      getTokenRequest.code = options.code;
      getTokenRequest.redirect_uri = options.redirect_uri;
      // PKCE: https://medium.com/ringcentral-developers/use-authorization-code-pkce-for-ringcentral-api-in-client-app-e9108f04b5f0
      getTokenRequest.code_verifier = options.code_verifier;
    } else if ('jwt' in options) {
      getTokenRequest.grant_type = 'urn:ietf:params:oauth:grant-type:jwt-bearer';
      getTokenRequest.assertion = options.jwt;
    } else {
      throw new Error('Unsupported authorization flow');
    }
    return this.getToken(getTokenRequest);
  }

  /**
   * Each time you call token endpoint using this flow a new client session starts.
   * It is associated with the issued token pair: access token and refresh token, returned in response to this request.
   * To continue the session you can refresh the obtained access token and refresh token as many times as you need, using Refresh Token flow or the same flow.
   * To start another client session you should call token endpoint using this flow again.
   *
   * Please consider that only 5 simultaneously active sessions per extension per application are supported.
   * Thus if you exceed the number of sessions started per extension per application, the oldest one is ended.
   *
   * https://developers.ringcentral.com/api-reference/Get-Token
   *
   * @param options PasswordLoginFlowOpts
   */
  async login(options: PasswordFlowOptions): Promise<TokenInfo> {
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
  async refresh(refreshToken?: string): Promise<TokenInfo> {
    const tokenToRefresh = refreshToken ?? this.token?.refresh_token;
    if (!tokenToRefresh) {
      throw new Error('tokenToRefresh must be specified.');
    }
    const getTokenRequest: GetTokenRequest = {};
    getTokenRequest.grant_type = 'refresh_token';
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
  async revoke(tokenToRevoke?: string) {
    for (const sdkExtension of this.sdkExtensions) {
      await sdkExtension.revoke();
    }
    if (!tokenToRevoke && !this.token) {
      // nothing to revoke
      return;
    }
    if (!this.rest.clientId || !this.rest.clientSecret) {
      // no clientId or clientSecret, the token is from external source, cannot revoke
      return;
    }
    tokenToRevoke = tokenToRevoke ?? this.token?.access_token ?? this.token?.refresh_token;
    await this.restapi(null).oauth().revoke().post({ token: tokenToRevoke });
    this.token = undefined;
  }

  restapi(apiVersion: string | null = 'v1.0'): Restapi {
    return new Restapi(this, apiVersion);
  }

  scim(version: string | null = 'v2'): Scim {
    return new Scim(this, version);
  }

  analytics(): Analytics {
    return new Analytics(this);
  }
}

export default RingCentral;
