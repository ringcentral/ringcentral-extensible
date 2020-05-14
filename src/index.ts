import {Method, AxiosResponse} from 'axios';

import {EventEmitter} from 'events';

import {GetTokenRequest, TokenInfo} from './definitions';
import Restapi from './paths/Restapi';
import Scim from './paths/Scim';
import Rest, {RestOptions, RestRequestConfig} from './Rest';
import Wsg, {WsgOptions} from './Wsg';

type PasswordFlowOptions = {
  username: string;
  extension?: string;
  password: string;
};
type AuthCodeFlowOptions = {
  code: string;
  redirect_uri: string;
};
type RingCentralDefaults = {
  transport: 'https' | 'wss';
};

export enum events {
  beforeLogin = 'beforeLogin',
  loginSuccess = 'loginSuccess',
  loginError = 'loginError',
  beforeRefresh = 'beforeRefresh',
  refreshSuccess = 'refreshSuccess',
  refreshError = 'refreshError',
  beforeLogout = 'beforeLogout',
  logoutSuccess = 'logoutSuccess',
  logoutError = 'logoutError',
  rateLimitError = 'rateLimitError',
}

export default class RingCentral extends EventEmitter {
  rest: Rest;
  wsg?: Wsg;

  defaults: RingCentralDefaults = {
    transport: 'https',
  };

  constructor(restOptions: RestOptions, wsgOptions?: WsgOptions) {
    super();
    this.rest = new Rest(restOptions);
    if (wsgOptions) {
      this.wsg = new Wsg(this, wsgOptions);
    }
    this.rest.on(events.rateLimitError, event => {
      this.emit(events.rateLimitError, event);
    });
  }

  get token() {
    return this.rest.token;
  }
  set token(token) {
    this.rest.token = token;
  }

  async request<T>(
    httpMethod: Method,
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig
  ): Promise<AxiosResponse<T>> {
    const transport = config?.transport ?? this.defaults.transport;
    let engine: Rest | Wsg = this.rest;
    if (transport === 'wss') {
      if (!this.wsg) {
        throw new Error(
          'In order to use wss as transport, you need to specify wsgOptions when initializing RingCentral.'
        );
      }
      engine = this.wsg!;
    }
    delete config?.transport;
    return engine.request<T>(
      httpMethod,
      endpoint,
      content,
      queryParams,
      config
    );
  }

  async get<T>(
    endpoint: string,
    queryParams?: {},
    config?: RestRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.request<T>('GET', endpoint, undefined, queryParams, config);
  }
  async delete<T>(
    endpoint: string,
    queryParams?: {},
    config?: RestRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.request<T>('DELETE', endpoint, undefined, queryParams, config);
  }
  async post<T>(
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.request<T>('POST', endpoint, content, queryParams, config);
  }
  async put<T>(
    endpoint: string,
    content: {},
    queryParams?: {},
    config?: RestRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.request<T>('PUT', endpoint, content, queryParams, config);
  }
  async patch<T>(
    endpoint: string,
    content: {},
    queryParams?: {},
    config?: RestRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.request<T>('PATCH', endpoint, content, queryParams, config);
  }

  async getToken(
    getTokenRequest: GetTokenRequest
  ): Promise<TokenInfo | undefined> {
    this.token = await this.restapi(null)
      .oauth()
      .token()
      .post(getTokenRequest, {transport: 'https'})
      .then(res => {
        if (getTokenRequest.grant_type === 'password') {
          this.emit(events.loginSuccess, res);
        } else if (getTokenRequest.grant_type === 'authorization_code') {
          this.emit(events.loginSuccess, res);
        } else if (getTokenRequest.grant_type === 'refresh_token') {
          this.emit(events.refreshSuccess, res);
        }
        return res;
      })
      .catch(e => {
        if (getTokenRequest.grant_type === 'password') {
          this.emit(events.loginError, e.response);
        } else if (getTokenRequest.grant_type === 'authorization_code') {
          this.emit(events.loginError, e.response);
        } else if (getTokenRequest.grant_type === 'refresh_token') {
          this.emit(events.refreshError, e.response);
        }
        return undefined;
      });
    return this.token;
  }

  async authorize(
    options: PasswordFlowOptions | AuthCodeFlowOptions
  ): Promise<TokenInfo | undefined> {
    const getTokenRequest = new GetTokenRequest();
    if ('username' in options) {
      getTokenRequest.grant_type = 'password';
      getTokenRequest.username = options.username;
      getTokenRequest.extension = options.extension ?? '';
      getTokenRequest.password = options.password;
    } else if ('code' in options) {
      getTokenRequest.grant_type = 'authorization_code';
      getTokenRequest.code = options.code;
      getTokenRequest.redirect_uri = options.redirect_uri;
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
  async login(options: PasswordFlowOptions): Promise<TokenInfo | undefined> {
    this.emit(events.beforeLogin);
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
  async refresh(refreshToken?: string): Promise<TokenInfo | undefined> {
    this.emit(events.beforeRefresh);
    const tokenToRefresh = refreshToken ?? this.token?.refresh_token ?? '';
    if (!tokenToRefresh) {
      this.emit(events.logoutError, 'TokenToRefresh must be specified..');
      throw new Error('tokenToRefresh must be specified.');
    }
    const getTokenRequest = new GetTokenRequest();
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
    this.emit(events.beforeLogout);
    this.wsg?.revoke();
    if (!tokenToRevoke && !this.token) {
      // nothing to revoke
      this.emit(events.logoutError, 'Nothing to revoke.');
      return;
    }
    if (!this.rest.clientId || !this.rest.clientSecret) {
      // no clientId or clientSecret, the token is from external source, cannot revoke
      this.emit(events.logoutError, 'No clientId or clientSecret');
      this.token = undefined;
      return;
    }
    tokenToRevoke =
      tokenToRevoke ?? this.token?.access_token ?? this.token?.refresh_token;
    await this.restapi(null)
      .oauth()
      .revoke()
      .post({token: tokenToRevoke}, {transport: 'https'})
      .then(() => {
        this.emit(events.logoutSuccess);
      })
      .catch(e => {
        this.emit(events.logoutError, e);
      });
    this.token = undefined;
  }

  /**
   * This method provides you with a start of chain methods `rc.restapi() ...`,
   * so that you can construct longer ones, like this `rc.restapi().account().extension().messageStore().list()`
   *
   * @param apiVersion API version, currently the only valid value is 'v1.0'
   */
  restapi(apiVersion: string | null = 'v1.0'): Restapi {
    return new Restapi(this, apiVersion);
  }

  /**
   * This method provides you with a start of chain methods `rc.scim() ...`,
   * so that you can construct longer ones, like this `rc.scim().users(userId).delete()`
   *
   * @param version SCIM API version, currently the only valid value is 'v2'
   */
  scim(version: string | null = 'v2'): Scim {
    return new Scim(this, version);
  }
}
