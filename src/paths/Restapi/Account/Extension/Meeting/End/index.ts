import Parent from '..'
import RestClient from '../../../../../..'

class End {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/end`
  }

  /**
   * Operation: End Meeting
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}/end
   */
  async post (): Promise<string> {
    return this.rc.post(this.path())
  }
}

export default End
