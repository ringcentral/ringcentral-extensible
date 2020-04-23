import Users from './Users'
import ServiceProviderConfig from './ServiceProviderConfig'
import Health from './Health'
import RestClient from '../..'

class Scim {
  rc: RestClient
  version: (string | null)

  constructor (rc: RestClient, version: (string | null) = 'v2') {
    this.rc = rc
    this.version = version
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.version !== null) {
      return `/scim/${this.version}`
    }

    return `/scim`
  }

  health (): Health {
    return new Health(this)
  }

  serviceProviderConfig (): ServiceProviderConfig {
    return new ServiceProviderConfig(this)
  }

  users (id: (string | null) = null): Users {
    return new Users(this, id)
  }
}

export default Scim
