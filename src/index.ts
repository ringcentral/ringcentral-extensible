import axios, { AxiosInstance, Method, AxiosRequestConfig } from 'axios'
import qs from 'qs'

import { GetTokenRequest, TokenInfo } from './definitions'
import RestException from './RestException'
import Restapi from './paths/Restapi'
import Scim from './paths/Scim'

class RestClient {
  static sandboxServer = 'https://platform.devtest.ringcentral.com'
  static productionServer = 'https://platform.ringcentral.com'

  clientId: string
  clientSecret: string
  server: string
  appName = 'Unknown'
  appVersion = '0.0.1'
  httpClient: AxiosInstance
  token?: TokenInfo

  constructor (clientId: string, clientSecret: string, server: string, appName = 'Unknown', appVersion = '0.0.1') {
    this.clientId = clientId
    this.clientSecret = clientSecret
    this.server = server
    this.appName = appName
    this.appVersion = appVersion
    this.httpClient = axios.create({
      baseURL: this.server,
      headers: { 'X-User-Agent': `${appName}/${appVersion} tylerlong/ringcentral-typescript` },
      validateStatus: status => {
        return true
      },
      paramsSerializer: params => {
        return qs.stringify(params, { indices: false })
      }
    })
  }

  async request (httpMethod: Method, endpoint: string, content?: {}, queryParams?: {}, headers?: {}): Promise<any> {
    const config: AxiosRequestConfig = {
      method: httpMethod,
      url: endpoint,
      data: content,
      params: queryParams,
      headers
    }
    if (endpoint.startsWith('/restapi/oauth/')) { // basic token
      config.auth = {
        username: this.clientId,
        password: this.clientSecret
      }
      config.data = qs.stringify(config.data)
    } else { // bearer token
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${this.token?.access_token}`
      }
    }
    const r = await this.httpClient.request(config)
    if (r.status < 200 || r.status > 299) {
      throw new RestException(r)
    }
    return r.data
  }
  async get (endpoint: string, queryParams?: {}): Promise<any> {
    return this.request('GET', endpoint, undefined, queryParams)
  }
  async delete (endpoint: string, queryParams?: {}): Promise<any> {
    return this.request('DELETE', endpoint, undefined, queryParams)
  }
  async post (endpoint: string, content?: {}, queryParams?: {}, headers?: {}): Promise<any> {
    return this.request('POST', endpoint, content, queryParams, headers)
  }
  async put (endpoint: string, content: {}, queryParams?: {}, headers?: {}): Promise<any> {
    return this.request('PUT', endpoint, content, queryParams, headers)
  }
  async patch (endpoint: string, content: {}, queryParams?: {}, headers?: {}): Promise<any> {
    return this.request('PATCH', endpoint, content, queryParams, headers)
  }

  async authorize (getTokenRequest: GetTokenRequest): Promise<TokenInfo>
  async authorize (username: string, extension: string, password: string): Promise<TokenInfo>
  async authorize (authCode: string, redirectUri: string): Promise<TokenInfo>
  async authorize (arg1: (string | GetTokenRequest), arg2?: string, arg3?: string): Promise<TokenInfo> {
    let getTokenRequest = new GetTokenRequest()
    if (arg1 instanceof GetTokenRequest) {
      getTokenRequest = arg1
    } else if (arg3) { // password flow
      getTokenRequest.grant_type = 'password'
      getTokenRequest.username = arg1
      getTokenRequest.extension = arg2
      getTokenRequest.password = arg3
    } else { // auth code flow
      getTokenRequest.grant_type = 'authorization_code'
      getTokenRequest.code = arg1
      getTokenRequest.redirect_uri = arg2
    }
    this.token = await this.restapi(null).oauth().token().post(getTokenRequest)
    return this.token
  }

  async refresh (refreshToken?: string): Promise<TokenInfo> {
    const tokenToRefresh = refreshToken ?? this.token?.refresh_token
    if (!tokenToRefresh) {
      throw new Error('tokenToRefresh must be specified.')
    }
    const getTokenRequest = new GetTokenRequest()
    getTokenRequest.grant_type = 'refresh_token'
    getTokenRequest.refresh_token = tokenToRefresh
    return this.authorize(getTokenRequest)
  }

  async revoke (tokenToRevoke?: string) {
    if (!tokenToRevoke && !this.token) { // nothing to revoke
      return
    }
    tokenToRevoke = tokenToRevoke ?? this.token?.access_token ?? this.token?.refresh_token
    await this.restapi(null).oauth().revoke().post({ token: tokenToRevoke })
    this.token = undefined
  }

  restapi (apiVersion: (string | null) = 'v1.0'): Restapi {
    return new Restapi(this, apiVersion)
  }

  scim (version: (string | null) = 'v2'): Scim {
    return new Scim(this, version)
  }
}

export default RestClient
