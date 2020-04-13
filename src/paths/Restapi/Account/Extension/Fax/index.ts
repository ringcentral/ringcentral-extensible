import FaxResponse from '../../../../../definitions/FaxResponse'
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
    return `${this.parent.path()}/fax`
  }

  /**
   * Operation: Create Fax Message
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/fax
   */
  async post(CreateFaxMessageRequest createFaxMessageRequest): Promise<FaxResponse> {
    var multipartFormDataContent = Utils.GetMultipartFormDataContent(createFaxMessageRequest)
    return this.rc.Post(this.path(), multipartFormDataContent)
  }
}

export default Index
