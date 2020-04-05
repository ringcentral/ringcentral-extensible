import axios, { AxiosInstance } from 'axios'
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

    constructor(clientId: string, clientSecret: string,  server: string,  appName = "Unknown", appVersion = "0.0.1")
    {
        this.clientId = clientId
        this.clientSecret = clientSecret
        this.server = server
        this.appName = appName
        this.appVersion = appVersion
        this.httpClient = axios.create({
            baseURL: this.server,
            headers: {"X-User-Agent": `${appName}/${appVersion} tylerlong/ringcentral-typescript/${pkg.version}`}
        })
    }

    async authorize(getTokenRequest: GetTokenRequest): Promise<TokenInfo>
    async authorize(username: string, extension: string, password: string): Promise<TokenInfo>
    async authorize(arg1: any, extension?: string, password?: string): Promise<TokenInfo>
    {
        let getTokenRequest = new GetTokenRequest()
        if(arg1 instanceof GetTokenRequest) {
            getTokenRequest = arg1
        } else { // password flow
            getTokenRequest.grant_type = 'password'
            getTokenRequest.username = arg1
            getTokenRequest.extension = extension
            getTokenRequest.password = password
        }
        const r = await this.httpClient.post('/restapi/oauth/token', qs.stringify(getTokenRequest), {
            auth: {
                username: this.clientId,
                password: this.clientSecret
            }
        })
        return r.data
    }
}

export default RestClient
