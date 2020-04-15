import RestClient from '../..'

class Index {
  rc: RestClient
  version: string

  constructor(rc: RestClient, version: string = "v2") {
    this.rc = rc
    this.version = version
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.version !== null) {
      return `/scim/${this.version}`
    }

    return `/scim`
  }
}

export default Index
