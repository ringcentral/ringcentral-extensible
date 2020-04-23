import { GetMessageInfoResponse, CreateInternalTextMessageRequest } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class CompanyPager {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/company-pager`
  }

  /**
   * Operation: Create Internal Text Message
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/company-pager
   */
  async post (createInternalTextMessageRequest: CreateInternalTextMessageRequest): Promise<GetMessageInfoResponse> {
    return this.rc.post(this.path(), createInternalTextMessageRequest)
  }
}

export default CompanyPager
