import UpdateForwardingNumberRequest from '../../../../../definitions/UpdateForwardingNumberRequest'
import CreateForwardingNumberRequest from '../../../../../definitions/CreateForwardingNumberRequest'
import ForwardingNumberInfo from '../../../../../definitions/ForwardingNumberInfo'
import GetExtensionForwardingNumberListResponse from '../../../../../definitions/GetExtensionForwardingNumberListResponse'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  forwardingNumberId: string
  parent: Parent

  constructor(parent: Parent, forwardingNumberId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.forwardingNumberId = forwardingNumberId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.forwardingNumberId != null) {
      return `${this.parent.path()}/forwarding-number/${this.forwardingNumberId}`
    }

    return `${this.parent.path()}/forwarding-number`
  }

  /**
   * Operation: Get Forwarding Number List
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number
   */
  async list(ListForwardingNumbersParameters queryParams = null): Promise<GetExtensionForwardingNumberListResponse> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Create Forwarding Number
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number
   */
  async post(CreateForwardingNumberRequest createForwardingNumberRequest): Promise<ForwardingNumberInfo> {
    return this.rc.post(this.path(false), createForwardingNumberRequest)
  }

  /**
   * Operation: Get Forwarding Number
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}
   */
  async get(): Promise<ForwardingNumberInfo> {
    if (!this.forwardingNumberId || this.forwardingNumberId === null) {
      throw new Error("forwardingNumberId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Forwarding Number
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}
   */
  async put(UpdateForwardingNumberRequest updateForwardingNumberRequest): Promise<ForwardingNumberInfo> {
    if (!this.forwardingNumberId || this.forwardingNumberId === null) {
      throw new Error("forwardingNumberId must not be undefined or null")
    }

    return this.rc.put(this.path(), updateForwardingNumberRequest)
  }

  /**
   * Operation: Delete Forwarding Number
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}
   */
  async delete(): Promise<string> {
    if (!this.forwardingNumberId || this.forwardingNumberId === null) {
      throw new Error("forwardingNumberId must not be undefined or null")
    }

    return this.rc.delete(this.path())
  }
}

export default Index
