import BulkAccountCallRecordingsResource from '../../../../../definitions/BulkAccountCallRecordingsResource'
import Parent from '..'
import RestClient from '../../../../..'

class BulkAssign {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/bulk-assign`
  }

  /**
   * Operation: Update Call Recording Extension List
   * Http post /restapi/v1.0/account/{accountId}/call-recording/bulk-assign
   */
  async post(bulkAccountCallRecordingsResource: BulkAccountCallRecordingsResource): Promise<string> {
    return this.rc.post(this.path(), bulkAccountCallRecordingsResource)
  }
}

export default BulkAssign
