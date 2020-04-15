import SyncAccountCallLogParameters from '../../../../definitions/SyncAccountCallLogParameters'
import AccountCallLogSyncResponse from '../../../../definitions/AccountCallLogSyncResponse'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/call-log-sync`
  }

  /**
   * Operation: Sync Company Call Log
   * Http get /restapi/v1.0/account/{accountId}/call-log-sync
   */
  async get(queryParams?: SyncAccountCallLogParameters): Promise<AccountCallLogSyncResponse> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Index
