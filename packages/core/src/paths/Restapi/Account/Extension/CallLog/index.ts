import CallLogRecord from '../../../../../definitions/CallLogRecord';
import ReadUserCallRecordParameters from '../../../../../definitions/ReadUserCallRecordParameters';
import DeleteUserCallLogParameters from '../../../../../definitions/DeleteUserCallLogParameters';
import CallLogResponse from '../../../../../definitions/CallLogResponse';
import ReadUserCallLogParameters from '../../../../../definitions/ReadUserCallLogParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

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
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-log
   * Rate Limit Group: Heavy
   * App Permission: ReadCallLog
   * User Permission: ReadCallLog
   */
  async list(queryParams?: ReadUserCallLogParameters, restRequestConfig?: RestRequestConfig): Promise<CallLogResponse> {
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
  async delete(queryParams?: DeleteUserCallLogParameters, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.delete<string>(this.path(false), queryParams, restRequestConfig);
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
  async get(queryParams?: ReadUserCallRecordParameters, restRequestConfig?: RestRequestConfig): Promise<CallLogRecord> {
    if (this.callRecordId === null) {
      throw new Error('callRecordId must be specified.');
    }
    const r = await this.rc.get<CallLogRecord>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
