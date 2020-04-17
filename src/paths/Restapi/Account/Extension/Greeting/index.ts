import { CustomUserGreetingInfo, CreateCustomUserGreetingRequest } from '../../../../../definitions'
import Utils from '../../../../../Utils'
import Parent from '..'
import RestClient from '../../../../..'

class Greeting {
  rc: RestClient
  greetingId: string
  parent: Parent

  constructor(parent: Parent, greetingId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.greetingId = greetingId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.greetingId !== null) {
      return `${this.parent.path()}/greeting/${this.greetingId}`
    }

    return `${this.parent.path()}/greeting`
  }

  /**
   * Operation: Create Custom User Greeting
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting
   */
  async post(createCustomUserGreetingRequest: CreateCustomUserGreetingRequest): Promise<CustomUserGreetingInfo> {
    var formData = Utils.getFormData(createCustomUserGreetingRequest)
    return this.rc.post(this.path(false), formData, undefined, formData.getHeaders())
  }

  /**
   * Operation: Get Custom Greeting
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting/{greetingId}
   */
  async get(): Promise<CustomUserGreetingInfo> {
    if (this.greetingId === undefined || this.greetingId === null) {
      throw new Error("greetingId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Greeting
