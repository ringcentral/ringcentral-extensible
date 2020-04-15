import CreateCustomUserGreetingRequest from '../../../../../definitions/CreateCustomUserGreetingRequest'
import CustomUserGreetingInfo from '../../../../../definitions/CustomUserGreetingInfo'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  greetingId: string
  parent: Parent

  constructor(parent: Parent, greetingId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.greetingId = greetingId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.greetingId != null) {
      return `${this.parent.path()}/greeting/${this.greetingId}`
    }

    return `${this.parent.path()}/greeting`
  }

  /**
   * Operation: Create Custom User Greeting
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting
   */
  async post(createCustomUserGreetingRequest: CreateCustomUserGreetingRequest): Promise<CustomUserGreetingInfo> {
    var multipartFormDataContent = Utils.GetMultipartFormDataContent(createCustomUserGreetingRequest)
    return this.rc.post(this.path(false), multipartFormDataContent)
  }

  /**
   * Operation: Get Custom Greeting
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting/{greetingId}
   */
  async get(): Promise<CustomUserGreetingInfo> {
    if (!this.greetingId || this.greetingId === null) {
      throw new Error("greetingId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Index
