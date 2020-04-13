import GetVersionResponse from '../../definitions/GetVersionResponse'
import GetVersionsResponse from '../../definitions/GetVersionsResponse'
import RestClient from '../..'

class Index {
  rc: RestClient
  apiVersion: string

  constructor(rc: RestClient, apiVersion: string = "v1.0") {
    this.rc = rc
    this.apiVersion = apiVersion
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.apiVersion != null) {
      return `/restapi/${this.apiVersion}`
    }

    return `/restapi`
  }

  /**
   * Operation: Get API Versions
   * Http get /restapi
   */
  async list(): Promise<GetVersionsResponse> {
    return this.rc.get(this.path(false))
  }

  /**
   * Operation: Get Version Info
   * Http get /restapi/{apiVersion}
   */
  async get(): Promise<GetVersionResponse> {
    if (!this.apiVersion || this.apiVersion === null) {
      throw new Error("apiVersion must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Index
