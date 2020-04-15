import CreateSMSMessage from '../../../../../definitions/CreateSMSMessage'
import GetMessageInfoResponse from '../../../../../definitions/GetMessageInfoResponse'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
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
  async post(createSMSMessage: CreateSMSMessage): Promise<GetMessageInfoResponse> {
    var multipartFormDataContent = Utils.GetMultipartFormDataContent(createSMSMessage)
    return this.rc.post(this.path(), multipartFormDataContent)
  }
}

export default Index
