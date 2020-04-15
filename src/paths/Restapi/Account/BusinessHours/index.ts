import CompanyBusinessHoursUpdateRequest from '../../../../definitions/CompanyBusinessHoursUpdateRequest'
import CompanyBusinessHours from '../../../../definitions/CompanyBusinessHours'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/business-hours`
  }

  /**
   * Operation: Get Company Business Hours
   * Http get /restapi/v1.0/account/{accountId}/business-hours
   */
  async get(): Promise<CompanyBusinessHours> {
    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Company Business Hours
   * Http put /restapi/v1.0/account/{accountId}/business-hours
   */
  async put(companyBusinessHoursUpdateRequest: CompanyBusinessHoursUpdateRequest): Promise<CompanyBusinessHours> {
    return this.rc.put(this.path(), companyBusinessHoursUpdateRequest)
  }
}

export default Index
