import axios, { AxiosInstance, Method, AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'
import delay from 'delay'

import { GetTokenRequest, TokenInfo } from './definitions'
import RestException from './RestException'
import Restapi from './paths/Restapi'
import Scim from './paths/Scim'
import { version } from '../package.json'

interface ConstructorOptions {
  clientId: string
  clientSecret: string
  server: string
  appName?: string
  appVersion?: string
  httpClient?: AxiosInstance
  token?: TokenInfo
  handleRateLimit?: (boolean | number)
}

interface PasswordFlowOptions {
  username: string
  extension?: string
  password: string
}
interface AuthCodeFlowOptions {
  code: string
  redirect_uri: string
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
  handleRateLimit?: (boolean | number)

  constructor (options: ConstructorOptions) {
    this.clientId = options.clientId
    this.clientSecret = options.clientSecret
    this.server = options.server
    this.appName = options.appName ? options.appName : 'Unknown'
    this.appVersion = options.appVersion ? options.appVersion : '0.0.1'
    this.httpClient = options.httpClient ? options.httpClient : axios.create({
      baseURL: this.server,
      headers: { 'X-User-Agent': `${this.appName}/${this.appVersion} tylerlong/ringcentral-typescript/${version}` },
      validateStatus: status => {
        return true
      },
      paramsSerializer: params => {
        return qs.stringify(params, { indices: false })
      }
    })
    this.token = options.token
    this.handleRateLimit = options.handleRateLimit ? options.handleRateLimit : false
  }

  async request (httpMethod: Method, endpoint: string, content?: {}, queryParams?: {}, config?: {}): Promise<AxiosResponse<any>> {
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

    if (r.status === 429 && this.handleRateLimit === false) {
      throw new RestException(r)
    } else if (r.status === 429 && (this.handleRateLimit === true || typeof this.handleRateLimit === 'number')) {

      let delayTime = r.headers['x-rate-limit-window'] ? r.headers['x-rate-limit-window'] : 60

      if (typeof this.handleRateLimit === 'number') {
        delayTime = this.handleRateLimit
      }

      // unsure on level? or if this should be a thrown error?
      console.debug(`Hit RingCentral Rate Limit. Pausing requests for ${delayTime} seconds.`)

      await delay(delayTime * 1000)

      return this.request(httpMethod, endpoint, content, queryParams, config)

    } else if (r.status < 200 || r.status > 299 && r.status !== 429) {
      throw new RestException(r)
    }
    return r
  }
  async get (endpoint: string, queryParams?: {}, config?: {}): Promise<AxiosResponse<any>> {
    return this.request('GET', endpoint, undefined, queryParams, config)
  }
  async delete (endpoint: string, queryParams?: {}, config?: {}): Promise<AxiosResponse<any>> {
    return this.request('DELETE', endpoint, undefined, queryParams, config)
  }
  async post (endpoint: string, content?: {}, queryParams?: {}, config?: {}): Promise<AxiosResponse<any>> {
    return this.request('POST', endpoint, content, queryParams, config)
  }
  async put (endpoint: string, content: {}, queryParams?: {}, config?: {}): Promise<AxiosResponse<any>> {
    return this.request('PUT', endpoint, content, queryParams, config)
  }
  async patch (endpoint: string, content: {}, queryParams?: {}, config?: {}): Promise<AxiosResponse<any>> {
    return this.request('PATCH', endpoint, content, queryParams, config)
  }

  async getToken (getTokenRequest: GetTokenRequest): Promise<TokenInfo> {
    this.token = await this.restapi(null).oauth().token().post(getTokenRequest)
    return this.token
  }

  async authorize (options: (PasswordFlowOptions | AuthCodeFlowOptions)): Promise<TokenInfo> {
    const getTokenRequest = new GetTokenRequest()
    if ('username' in options) {
      getTokenRequest.grant_type = 'password'
      getTokenRequest.username = options.username
      getTokenRequest.extension = options.extension ?? ''
      getTokenRequest.password = options.password
    } else if ('code' in options) {
      getTokenRequest.grant_type = 'authorization_code'
      getTokenRequest.code = options.code
      getTokenRequest.redirect_uri = options.redirect_uri
    } else {
      throw new Error('Unsupported authorization flow')
    }
    return this.getToken(getTokenRequest)
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
  async login (options: PasswordFlowOptions): Promise<TokenInfo> {
    return this.authorize(options)
  }

  /**
   * Each time you call token endpoint using this flow, you continue current client session, and receive a new token pair: access token and refresh token in response to this request.
   * The old token pair immediately becomes inactive.
   *
   * https://developers.ringcentral.com/api-reference/Get-Token
   *
   * @param refreshToken Refresh Token
   */
  async refresh (refreshToken?: string): Promise<TokenInfo> {
    const tokenToRefresh = refreshToken ?? this.token?.refresh_token
    if (!tokenToRefresh) {
      throw new Error('tokenToRefresh must be specified.')
    }
    const getTokenRequest = new GetTokenRequest()
    getTokenRequest.grant_type = 'refresh_token'
    getTokenRequest.refresh_token = tokenToRefresh
    return this.getToken(getTokenRequest)
  }

  /**
   * Each time you call token endpoint using this flow, you continue current client session, and receive a new token pair: access token and refresh token in response to this request.
   * The old token pair immediately becomes inactive.
   *
   * https://developers.ringcentral.com/api-reference/Revoke-Token
   *
   * @param tokenToRevoke AccessToken
   */
  async revoke (tokenToRevoke?: string) {
    if (!tokenToRevoke && !this.token) { // nothing to revoke
      return
    }
    tokenToRevoke = tokenToRevoke ?? this.token?.access_token ?? this.token?.refresh_token
    await this.restapi(null).oauth().revoke().post({ token: tokenToRevoke })
    this.token = undefined
  }

  /**
   * This method provides you with a start of chain methods `rc.restapi() ...`,
   * so that you can construct longer ones, like this `rc.restapi().account().extension().messageStore().list()`
   *
   * @param apiVersion API version, currently the only valid value is 'v1.0'
   */
  restapi (apiVersion: (string | null) = 'v1.0'): Restapi {
    return new Restapi(this, apiVersion)
  }

  /**
   * This method provides you with a start of chain methods `rc.scim() ...`,
   * so that you can construct longer ones, like this `rc.scim().users(userId).delete()`
   *
   * @param version SCIM API version, currently the only valid value is 'v2'
   */
  scim (version: (string | null) = 'v2'): Scim {
    return new Scim(this, version)
  }
}

export default RestClient
