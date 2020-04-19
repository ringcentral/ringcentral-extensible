import { GetMessageInfoResponse, CreateMMSMessage } from '../../../../../definitions'
import Utils from '../../../../../Utils'
import Parent from '..'
import RestClient from '../../../../..'

class Mms {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/mms`
  }

  /**
   * Operation: Create MMS Message
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/mms
   */
  async post(createMMSMessage: CreateMMSMessage): Promise<GetMessageInfoResponse> {
    var formData = Utils.getFormData(createMMSMessage)
    return this.rc.post(this.path(), formData, undefined, formData.getHeaders())
  }
}

export default Mms
