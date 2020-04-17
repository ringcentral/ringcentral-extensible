import { FaxResponse, CreateFaxMessageRequest } from '../../../../../definitions'
import Utils from '../../../../../Utils'
import Parent from '..'
import RestClient from '../../../../..'

class Fax {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/fax`
  }

  /**
   * Operation: Create Fax Message
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/fax
   */
  async post(createFaxMessageRequest: CreateFaxMessageRequest): Promise<FaxResponse> {
    var formData = Utils.getFormData(createFaxMessageRequest)
    return this.rc.post(this.path(), formData, undefined, formData.getHeaders())
  }
}

export default Fax
