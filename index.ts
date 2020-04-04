import axios from 'axios'

class RestClient {
    static sandboxServer = "https://platform.devtest.ringcentral.com"
    static productionServer = "https://platform.ringcentral.com"

    clientId: string
    clientSecret: string
    server: string
    appName = "Unknown"
    appVersion = "0.0.1"

    constructor(clientId: string, clientSecret: string,  server: string,  appName = "Unknown", appVersion = "0.0.1")
    {
        this.clientId = clientId
        this.clientSecret = clientSecret
        this.server = server
        this.appName = appName
        this.appVersion = appVersion
    }

    authorize(getTokenRequest: number): number
    authorize(username: string, extension: string, password: string): number
    authorize(arg1: any, extension?: string, password?: string): number
    {
        return 1
    }
} 

;(async () => {
    const r = await axios({
        method: 'get',
        url: 'https://google.com'
    })
    console.log(r)
})()