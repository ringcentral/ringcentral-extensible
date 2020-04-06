import axios, { AxiosInstance, Method } from 'axios'
import qs from 'qs'

import GetTokenRequest from './definitions/GetTokenRequest'
import TokenInfo from './definitions/TokenInfo'
import pkg from '../package.json'

class RestClient {
  static sandboxServer = "https://platform.devtest.ringcentral.com"
  static productionServer = "https://platform.ringcentral.com"

  clientId: string
  clientSecret: string
  server: string
  appName = "Unknown"
  appVersion = "0.0.1"
  httpClient: AxiosInstance
  token?: TokenInfo

  constructor(clientId: string, clientSecret: string, server: string, appName = "Unknown", appVersion = "0.0.1") {
    this.clientId = clientId
    this.clientSecret = clientSecret
    this.server = server
    this.appName = appName
    this.appVersion = appVersion
    this.httpClient = axios.create({
      baseURL: this.server,
      headers: { "X-User-Agent": `${appName}/${appVersion} tylerlong/ringcentral-typescript/${pkg.version}` }
    })
  }

  async request(httpMethod: Method, endpoint: string, content?: {}, queryParams?: {}):  Promise<{}>{
    const r = await this.httpClient.request({
      method: httpMethod,
      url: endpoint,
      data: content,
      params: queryParams,
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    })
    return r.data
  }
  async get(endpoint: string, queryParams?: {}): Promise<{}> {
    return this.request('GET', endpoint, undefined, queryParams)
  }
  async delete(endpoint: string, queryParams?: {}): Promise<{}> {
    return this.request('DELETE', endpoint, undefined, queryParams)
  }
  async post(endpoint: string, content: {}, queryParams?: {}) : Promise<{}> {
    return this.request('POST', endpoint, content, queryParams)
  }
  async put(endpoint: string, content: {}, queryParams?: {}) : Promise<{}> {
    return this.request('PUT', endpoint, content, queryParams)
  }
  async patch(endpoint: string, content: {}, queryParams?: {}) : Promise<{}> {
    return this.request('PATCH', endpoint, content, queryParams)
  }

  async authorize(getTokenRequest: GetTokenRequest): Promise<TokenInfo>
  async authorize(username: string, extension: string, password: string): Promise<TokenInfo>
  async authorize(authCode: string, redirectUri: string): Promise<TokenInfo>
  async authorize(arg1: (string | GetTokenRequest), arg2?: string, arg3?: string): Promise<TokenInfo> {
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
    const r = await this.httpClient.post('/restapi/oauth/token', qs.stringify(getTokenRequest), {
      auth: {
        username: this.clientId,
        password: this.clientSecret
      }
    })
    this.token = r.data
    return this.token
  }

  async refresh(refreshToken?: string): Promise<TokenInfo> {
    const tokenToRefresh = refreshToken ?? this.token?.refresh_token
    if (!tokenToRefresh)
    {
        return null
    }
    const getTokenRequest = new GetTokenRequest()
    getTokenRequest.grant_type = "refresh_token"
    getTokenRequest.refresh_token = tokenToRefresh
    return this.authorize(getTokenRequest)
  }

  async revoke(tokenToRevoke?: string) {
    if (!tokenToRevoke && !this.token) { // nothing to revoke
      return
    }
    tokenToRevoke = tokenToRevoke ?? this.token.access_token ?? this.token.refresh_token
    await this.httpClient.post('/restapi/oauth/revoke', qs.stringify({
      token: tokenToRevoke
    }), {
      auth: {
        username: this.clientId,
        password: this.clientSecret
      }
    })
    this.token = undefined
  }
}

export default RestClient
