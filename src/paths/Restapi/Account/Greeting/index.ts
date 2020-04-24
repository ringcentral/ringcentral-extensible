import { CustomCompanyGreetingInfo, CreateCompanyGreetingRequest } from '../../../../definitions'
import Utils from '../../../../Utils'
import Parent from '..'
import RestClient from '../../../..'

class Greeting {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/greeting`
  }

  /**
   * Operation: Create Company Greeting
   * Http post /restapi/v1.0/account/{accountId}/greeting
   */
  async post (createCompanyGreetingRequest: CreateCompanyGreetingRequest): Promise<CustomCompanyGreetingInfo> {
    const formData = Utils.getFormData(createCompanyGreetingRequest)
    return this.rc.post(this.path(), formData, undefined, { headers: formData.getHeaders() })
  }
}

export default Greeting
