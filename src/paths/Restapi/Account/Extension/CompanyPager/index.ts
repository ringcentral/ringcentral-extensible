import CreateInternalTextMessageRequest from '../../../../../definitions/CreateInternalTextMessageRequest'
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

  string path() {
    return `${this.parent.path()}/company-pager`
  }

  /**
   * Operation: Create Internal Text Message
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/company-pager
   */
  async post(CreateInternalTextMessageRequest createInternalTextMessageRequest): Promise<GetMessageInfoResponse> {
    return this.rc.post(this.path(), createInternalTextMessageRequest)
  }
}

export default Index
