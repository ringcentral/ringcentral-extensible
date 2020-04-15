import CreateCompanyGreetingRequest from '../../../../definitions/CreateCompanyGreetingRequest'
import CustomCompanyGreetingInfo from '../../../../definitions/CustomCompanyGreetingInfo'
import Utils from '../../../../Utils'
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
    return `${this.parent.path()}/greeting`
  }

  /**
   * Operation: Create Company Greeting
   * Http post /restapi/v1.0/account/{accountId}/greeting
   */
  async post(createCompanyGreetingRequest: CreateCompanyGreetingRequest): Promise<CustomCompanyGreetingInfo> {
    var formData = Utils.getFormData(createCompanyGreetingRequest)
    return this.rc.post(this.path(), formData)
  }
}

export default Index
