import GlipCompany from '../../../../definitions/GlipCompany'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  companyId: string
  parent: Parent

  constructor(parent: Parent, companyId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.companyId = companyId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.companyId != null) {
      return `${this.parent.path()}/companies/${this.companyId}`
    }

    return `${this.parent.path()}/companies`
  }

  /**
   * Operation: Get Company Info
   * Http get /restapi/v1.0/glip/companies/{companyId}
   */
  async get(): Promise<GlipCompany> {
    if (!this.companyId || this.companyId === null) {
      throw new Error("companyId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Index
