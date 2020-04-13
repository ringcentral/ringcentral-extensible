import ExtensionUpdateRequest from '../../../../definitions/ExtensionUpdateRequest'
import GetExtensionInfoResponse from '../../../../definitions/GetExtensionInfoResponse'
import ExtensionCreationRequest from '../../../../definitions/ExtensionCreationRequest'
import ExtensionCreationResponse from '../../../../definitions/ExtensionCreationResponse'
import GetExtensionListResponse from '../../../../definitions/GetExtensionListResponse'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  extensionId: string
  parent: Parent

  constructor(parent: Parent, extensionId: string = "~") {
    this.parent = parent
    this.rc = parent.rc
    this.extensionId = extensionId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.extensionId != null) {
      return `${this.parent.path()}/extension/${this.extensionId}`
    }

    return `${this.parent.path()}/extension`
  }

  /**
   * Operation: Get Extension List
   * Http get /restapi/v1.0/account/{accountId}/extension
   */
  async list(ListExtensionsParameters queryParams = null): Promise<GetExtensionListResponse> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Create Extension
   * Http post /restapi/v1.0/account/{accountId}/extension
   */
  async post(ExtensionCreationRequest extensionCreationRequest): Promise<ExtensionCreationResponse> {
    return this.rc.post(this.path(false), extensionCreationRequest)
  }

  /**
   * Operation: Get Extension
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}
   */
  async get(): Promise<GetExtensionInfoResponse> {
    if (!this.extensionId || this.extensionId === null) {
      throw new Error("extensionId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Extension
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}
   */
  async put(ExtensionUpdateRequest extensionUpdateRequest): Promise<GetExtensionInfoResponse> {
    if (!this.extensionId || this.extensionId === null) {
      throw new Error("extensionId must not be undefined or null")
    }

    return this.rc.put(this.path(), extensionUpdateRequest)
  }

  /**
   * Operation: Delete Extension
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}
   */
  async delete(DeleteExtensionParameters queryParams = null): Promise<string> {
    if (!this.extensionId || this.extensionId === null) {
      throw new Error("extensionId must not be undefined or null")
    }

    return this.rc.delete(this.path(), queryParams)
  }
}

export default Index
