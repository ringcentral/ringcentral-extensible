import CallRecordingExtensions from '../../../../../definitions/CallRecordingExtensions'
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
    return `${this.parent.path()}/extensions`
  }

  /**
   * Operation: Get Call Recording Extension List
   * Http get /restapi/v1.0/account/{accountId}/call-recording/extensions
   */
  async get(): Promise<CallRecordingExtensions> {
    return this.rc.get(this.path())
  }
}

export default Index
