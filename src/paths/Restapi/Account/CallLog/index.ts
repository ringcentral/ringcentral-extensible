import CompanyCallLogRecord from '../../../../definitions/CompanyCallLogRecord'
import AccountCallLogResponse from '../../../../definitions/AccountCallLogResponse'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  callRecordId: string
  parent: Parent

  constructor(parent: Parent, callRecordId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.callRecordId = callRecordId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.callRecordId != null) {
      return `${this.parent.path()}/call-log/${this.callRecordId}`
    }

    return `${this.parent.path()}/call-log`
  }

  /**
   * Operation: Get Company Call Log Records
   * Http get /restapi/v1.0/account/{accountId}/call-log
   */
  async list(ReadCompanyCallLogParameters queryParams = null): Promise<AccountCallLogResponse> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get Company Call Log Record(s)
   * Http get /restapi/v1.0/account/{accountId}/call-log/{callRecordId}
   */
  async get(ReadCompanyCallRecordParameters queryParams = null): Promise<CompanyCallLogRecord> {
    if (!this.callRecordId || this.callRecordId === null) {
      throw new Error("callRecordId must not be undefined or null")
    }

    return this.rc.get(this.path(), queryParams)
  }
}

export default Index
