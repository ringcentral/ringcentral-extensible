import CreateSMSMessage from '../../../../../definitions/CreateSMSMessage'
import GetMessageInfoResponse from '../../../../../definitions/GetMessageInfoResponse'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/sms`
  }

  /**
   * Operation: Send SMS
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/sms
   */
  async post(createSMSMessage: CreateSMSMessage): Promise<GetMessageInfoResponse> {
    return this.rc.post(this.path(), createSMSMessage)
  }
}

export default Index
