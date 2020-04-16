import CallMonitoringBulkAssign from '../../../../../definitions/CallMonitoringBulkAssign'
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
    return `${this.parent.path()}/bulk-assign`
  }

  /**
   * Operation: Update Call Monitoring Group List
   * Http post /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/bulk-assign
   */
  async post(callMonitoringBulkAssign: CallMonitoringBulkAssign): Promise<string> {
    return this.rc.post(this.path(), callMonitoringBulkAssign)
  }
}

export default Index
