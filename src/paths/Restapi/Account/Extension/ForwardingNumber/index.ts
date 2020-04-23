import { GetExtensionForwardingNumberListResponse, ListForwardingNumbersParameters, ForwardingNumberInfo, CreateForwardingNumberRequest, UpdateForwardingNumberRequest } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class ForwardingNumber {
  rc: RestClient
  forwardingNumberId: (string | null)
  parent: Parent

  constructor(parent: Parent, forwardingNumberId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.forwardingNumberId = forwardingNumberId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.forwardingNumberId !== null) {
      return `${this.parent.path()}/forwarding-number/${this.forwardingNumberId}`
    }

    return `${this.parent.path()}/forwarding-number`
  }

  /**
   * Operation: Get Forwarding Number List
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number
   */
  async list(queryParams?: ListForwardingNumbersParameters): Promise<GetExtensionForwardingNumberListResponse> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Create Forwarding Number
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number
   */
  async post(createForwardingNumberRequest: CreateForwardingNumberRequest): Promise<ForwardingNumberInfo> {
    return this.rc.post(this.path(false), createForwardingNumberRequest)
  }

  /**
   * Operation: Get Forwarding Number
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}
   */
  async get(): Promise<ForwardingNumberInfo> {
    if (this.forwardingNumberId === null) {
      throw new Error('forwardingNumberId must be specified.')
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Forwarding Number
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}
   */
  async put(updateForwardingNumberRequest: UpdateForwardingNumberRequest): Promise<ForwardingNumberInfo> {
    if (this.forwardingNumberId === null) {
      throw new Error('forwardingNumberId must be specified.')
    }

    return this.rc.put(this.path(), updateForwardingNumberRequest)
  }

  /**
   * Operation: Delete Forwarding Number
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}
   */
  async delete(): Promise<string> {
    if (this.forwardingNumberId === null) {
      throw new Error('forwardingNumberId must be specified.')
    }

    return this.rc.delete(this.path())
  }
}

export default ForwardingNumber
