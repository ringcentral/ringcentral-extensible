import axios, { AxiosInstance, Method, AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'

import { GetTokenRequest, TokenInfo } from './definitions'
import RestException from './RestException'
import Restapi from './paths/Restapi'
import Scim from './paths/Scim'
import { version } from '../package.json'

interface ConstructorOpts {
  clientId: string
  clientSecret: string
  server: string
  appName?: string
  appVersion?: string
  httpClient?: AxiosInstance
  token?: TokenInfo
}

interface PasswordLoginFlowOpts {
  username: string
  extension: string
  password: string
}

class RestClient {
  static sandboxServer = 'https://platform.devtest.ringcentral.com'
  static productionServer = 'https://platform.ringcentral.com'

  clientId: string
  clientSecret: string
  server: string
  appName: string
  appVersion: string
  httpClient: AxiosInstance
  token?: TokenInfo

  constructor(opts: ConstructorOpts) {
    this.clientId = opts.clientId
    this.clientSecret = opts.clientSecret
    this.server = opts.server
    this.appName = opts.appName ? opts.appName : 'Unknown'
    this.appVersion = opts.appVersion ? opts.appVersion : '0.0.1'
    this.httpClient = opts.httpClient ? opts.httpClient : axios.create({
      baseURL: this.server,
      headers: { 'X-User-Agent': `${this.appName}/${this.appVersion} tylerlong/ringcentral-typescript/${version}` },
      validateStatus: status => {
        return true
      },
      paramsSerializer: params => {
        return qs.stringify(params, { indices: false })
      }
    })
  }

  async request(httpMethod: Method, endpoint: string, content?: {}, queryParams?: {}, config?: {}): Promise<AxiosResponse<any>> {
    const _config: AxiosRequestConfig = {
      method: httpMethod,
      url: endpoint,
      data: content,
      params: queryParams,
      ...config
    }
    if (endpoint.startsWith('/restapi/oauth/')) { // basic token
      _config.auth = {
        username: this.clientId,
        password: this.clientSecret
      }
      _config.data = qs.stringify(_config.data)
    } else { // bearer token
      _config.headers = {
        ..._config.headers,
        Authorization: `Bearer ${this.token?.access_token}`
      }
    }
    const r = await this.httpClient.request(_config)
    if (r.status < 200 || r.status > 299) {
      throw new RestException(r)
    }
    return r
  }
  async get(endpoint: string, queryParams?: {}, config?: {}): Promise<AxiosResponse<any>> {
    return this.request('GET', endpoint, undefined, queryParams, config)
  }
  async delete(endpoint: string, queryParams?: {}, config?: {}): Promise<AxiosResponse<any>> {
    return this.request('DELETE', endpoint, undefined, queryParams, config)
  }
  async post(endpoint: string, content?: {}, queryParams?: {}, config?: {}): Promise<AxiosResponse<any>> {
    return this.request('POST', endpoint, content, queryParams, config)
  }
  async put(endpoint: string, content: {}, queryParams?: {}, config?: {}): Promise<AxiosResponse<any>> {
    return this.request('PUT', endpoint, content, queryParams, config)
  }
  async patch(endpoint: string, content: {}, queryParams?: {}, config?: {}): Promise<AxiosResponse<any>> {
    return this.request('PATCH', endpoint, content, queryParams, config)
  }

  async authorize(getTokenRequest: GetTokenRequest): Promise<TokenInfo>

  // authorize(authCode, redirectUri)
  async authorize(arg1: string, arg2: string, arg3?: string): Promise<TokenInfo>
  async authorize(arg1: string | GetTokenRequest, arg2?: string, arg3?: string): Promise<TokenInfo> {
    let getTokenRequest = new GetTokenRequest()
    if (arg1 instanceof GetTokenRequest) {
      getTokenRequest = arg1
    } else { // auth code flow
      getTokenRequest.grant_type = 'authorization_code'
      getTokenRequest.code = arg1
      getTokenRequest.redirect_uri = arg2
    }
    this.token = await this.restapi(null).oauth().token().post(getTokenRequest)
    return this.token
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
   * @param opts PasswordLoginFlowOpts
   */
  async login(opts: PasswordLoginFlowOpts) {
    let getTokenRequest = new GetTokenRequest()

    getTokenRequest.grant_type = 'password'
    getTokenRequest.username = opts.username
    getTokenRequest.extension = opts.extension
    getTokenRequest.password = opts.password

    this.token = await this.restapi(null).oauth().token().post(getTokenRequest)
    return this.token
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
    const tokenToRefresh = refreshToken ?? this.token?.refresh_token
    if (!tokenToRefresh) {
      throw new Error('tokenToRefresh must be specified.')
    }
    const getTokenRequest = new GetTokenRequest()
    getTokenRequest.grant_type = 'refresh_token'
    getTokenRequest.refresh_token = tokenToRefresh
    return this.authorize(getTokenRequest)
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
    if (!tokenToRevoke && !this.token) { // nothing to revoke
      return
    }
    tokenToRevoke = tokenToRevoke ?? this.token?.access_token ?? this.token?.refresh_token
    await this.restapi(null).oauth().revoke().post({ token: tokenToRevoke })
    this.token = undefined
  }

  /**
   * Returns current API version info by apiVersion.
   * 
   * https://developers.ringcentral.com/api-reference/API-Info/readAPIVersion
   * 
   * @param apiVersion API version to be requested, for example 'v1.0'
   */
  restapi(apiVersion: (string | null) = 'v1.0'): Restapi {
    return new Restapi(this, apiVersion)
  }

  scim(version: (string | null) = 'v2'): Scim {
    return new Scim(this, version)
  }
}

export default RestClient
