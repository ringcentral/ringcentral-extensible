import {
  AccountCallLogResponse,
  ReadCompanyCallLogParameters,
  CompanyCallLogRecord,
  ReadCompanyCallRecordParameters,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class CallLog {
  rc: RingCentral;
  callRecordId: string | null;
  parent: Parent;

  constructor(parent: Parent, callRecordId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.callRecordId = callRecordId;
  }

  path(withParameter = true): string {
    if (withParameter && this.callRecordId !== null) {
      return `${this.parent.path()}/call-log/${this.callRecordId}`;
    }

    return `${this.parent.path()}/call-log`;
  }

  /**
   * Operation: Get Company Call Log Records
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/call-log
   */
  async list(
    queryParams?: ReadCompanyCallLogParameters
  ): Promise<AccountCallLogResponse> {
    const r = await this.rc.get<AccountCallLogResponse>(
      this.path(false),
      queryParams
    );
    return r.data;
  }

  /**
   * Operation: Get Company Call Log Record(s)
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/call-log/{callRecordId}
   */
  async get(
    queryParams?: ReadCompanyCallRecordParameters
  ): Promise<CompanyCallLogRecord> {
    if (this.callRecordId === null) {
      throw new Error('callRecordId must be specified.');
    }

    const r = await this.rc.get<CompanyCallLogRecord>(this.path(), queryParams);
    return r.data;
  }
}

export default CallLog;
