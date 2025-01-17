import type CallLogRecord from '../../../../definitions/CallLogRecord';
import type ReadCompanyCallRecordParameters from '../../../../definitions/ReadCompanyCallRecordParameters';
import type CallLogResponse from '../../../../definitions/CallLogResponse';
import type ReadCompanyCallLogParameters from '../../../../definitions/ReadCompanyCallLogParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public callRecordId: string | null;

  public constructor(_parent: ParentInterface, callRecordId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.callRecordId = callRecordId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.callRecordId !== null) {
      return `${this._parent.path()}/call-log/${this.callRecordId}`;
    }
    return `${this._parent.path()}/call-log`;
  }
  /**
   * Returns call log records filtered by parameters specified.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-log
   * Rate Limit Group: Heavy
   * App Permission: ReadCallLog
   * User Permission: FullCompanyCallLog
   */
  public async list(
    queryParams?: ReadCompanyCallLogParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallLogResponse> {
    const r = await this.rc.get<CallLogResponse>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns individual call log record(s) by ID.
   * [Batch syntax](https://developers.ringcentral.com/guide/basics/batch-requests) is supported.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-log/{callRecordId}
   * Rate Limit Group: Heavy
   * App Permission: ReadCallLog
   * User Permission: FullCompanyCallLog
   */
  public async get(
    queryParams?: ReadCompanyCallRecordParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallLogRecord> {
    if (this.callRecordId === null) {
      throw new Error('callRecordId must be specified.');
    }
    const r = await this.rc.get<CallLogRecord>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
