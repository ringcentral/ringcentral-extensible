import CompanyCallLogRecord from '../../../../definitions/CompanyCallLogRecord';
import ReadCompanyCallRecordParameters from '../../../../definitions/ReadCompanyCallRecordParameters';
import AccountCallLogResponse from '../../../../definitions/AccountCallLogResponse';
import ReadCompanyCallLogParameters from '../../../../definitions/ReadCompanyCallLogParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  callRecordId: string | null;

  constructor(parent: ParentInterface, callRecordId: string | null = null) {
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
   * Returns call log records filtered by parameters specified.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-log
   * Rate Limit Group: Heavy
   * App Permission: ReadCallLog
   * User Permission: FullCompanyCallLog
   */
  async list(queryParams?: ReadCompanyCallLogParameters, restRequestConfig?: RestRequestConfig): Promise<AccountCallLogResponse> {
    const r = await this.rc.get<AccountCallLogResponse>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns individual call log record(s) by ID(s). Batch request is supported.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-log/{callRecordId}
   * Rate Limit Group: Heavy
   * App Permission: ReadCallLog
   * User Permission: FullCompanyCallLog
   */
  async get(queryParams?: ReadCompanyCallRecordParameters, restRequestConfig?: RestRequestConfig): Promise<CompanyCallLogRecord> {
    if (this.callRecordId === null) {
      throw new Error('callRecordId must be specified.');
    }
    const r = await this.rc.get<CompanyCallLogRecord>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
