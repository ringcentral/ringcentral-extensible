import type CallLogRecord from '../../../../../definitions/CallLogRecord';
import type ReadUserCallRecordParameters from '../../../../../definitions/ReadUserCallRecordParameters';
import type DeleteUserCallLogParameters from '../../../../../definitions/DeleteUserCallLogParameters';
import type CallLogResponse from '../../../../../definitions/CallLogResponse';
import type ReadUserCallLogParameters from '../../../../../definitions/ReadUserCallLogParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

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
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-log
   * Rate Limit Group: Heavy
   * App Permission: ReadCallLog
   * User Permission: ReadCallLog
   */
  public async list(
    queryParams?: ReadUserCallLogParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallLogResponse> {
    const r = await this.rc.get<CallLogResponse>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes filtered call log records.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-log
   * Rate Limit Group: Heavy
   * App Permission: EditCallLog
   * User Permission: EditCallLog
   */
  public async delete(
    queryParams?: DeleteUserCallLogParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.delete<string>(this.path(false), {}, queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns call log records by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}
   * Rate Limit Group: Heavy
   * App Permission: ReadCallLog
   * User Permission: ReadCallLog
   */
  public async get(
    queryParams?: ReadUserCallRecordParameters,
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
