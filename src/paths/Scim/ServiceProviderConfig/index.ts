import Parent from '..'
import RestClient from '../../..'

class ServiceProviderConfig {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/ServiceProviderConfig`
  }

  /**
   * Operation: Get Service Provider Config
   * Http get /scim/v2/ServiceProviderConfig
   */
  async get (): Promise<ServiceProviderConfig> {
    return this.rc.get(this.path())
  }
}

export default ServiceProviderConfig
