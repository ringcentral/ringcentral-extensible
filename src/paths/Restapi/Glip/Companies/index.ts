import { GlipCompany } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Companies {
  rc: RestClient
  companyId: string
  parent: Parent

  constructor(parent: Parent, companyId: string) {
    this.parent = parent
    this.rc = parent.rc
    this.companyId = companyId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.companyId) {
      return `${this.parent.path()}/companies/${this.companyId}`
    }

    return `${this.parent.path()}/companies`
  }

  /**
   * Operation: Get Company Info
   * Http get /restapi/v1.0/glip/companies/{companyId}
   */
  async get(): Promise<GlipCompany> {
    if (!this.companyId) {
      throw new Error('companyId must not be undefined')
    }

    return this.rc.get(this.path())
  }
}

export default Companies
