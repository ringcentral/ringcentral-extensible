import { FaxResponse, CreateFaxMessageRequest } from '../../../../../definitions'
import Utils from '../../../../../Utils'
import Parent from '..'
import RestClient from '../../../../..'

class Fax {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/fax`
  }

  /**
   * Operation: Create Fax Message
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/fax
   */
  async post (createFaxMessageRequest: CreateFaxMessageRequest): Promise<FaxResponse> {
    const formData = Utils.getFormData(createFaxMessageRequest)
    const r = await this.rc.post(this.path(), formData, undefined, { headers: formData.getHeaders() })
    return r.data
  }
}

export default Fax
