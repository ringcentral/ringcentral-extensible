import { AccountCallLogResponse, ReadCompanyCallLogParameters, CompanyCallLogRecord, ReadCompanyCallRecordParameters } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class CallLog {
  rc: RestClient
  callRecordId: (string | null)
  parent: Parent

  constructor (parent: Parent, callRecordId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.callRecordId = callRecordId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.callRecordId !== null) {
      return `${this.parent.path()}/call-log/${this.callRecordId}`
    }

    return `${this.parent.path()}/call-log`
  }

  /**
   * Operation: Get Company Call Log Records
   * Http get /restapi/v1.0/account/{accountId}/call-log
   */
  async list (queryParams?: ReadCompanyCallLogParameters): Promise<AccountCallLogResponse> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get Company Call Log Record(s)
   * Http get /restapi/v1.0/account/{accountId}/call-log/{callRecordId}
   */
  async get (queryParams?: ReadCompanyCallRecordParameters): Promise<CompanyCallLogRecord> {
    if (this.callRecordId === null) {
      throw new Error('callRecordId must be specified.')
    }

    return this.rc.get(this.path(), queryParams)
  }
}

export default CallLog
