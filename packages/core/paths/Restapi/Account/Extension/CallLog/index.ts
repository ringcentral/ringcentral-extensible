import { RestRequestConfig } from '../../../../../Rest';
import {
  ReadUserCallLogParameters,
  UserCallLogResponse,
  DeleteUserCallLogParameters,
  ReadUserCallRecordParameters,
  UserCallLogRecord,
} from '../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  callRecordId: string | null;

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
   * Returns call log records filtered by parameters specified.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-log
   * Rate Limit Group: Heavy
   * App Permission: ReadCallLog
   * User Permission: ReadCallLog
   */
  async list(
    queryParams?: ReadUserCallLogParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<UserCallLogResponse> {
    const r = await this.rc.get<UserCallLogResponse>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
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
  async delete(
    queryParams?: DeleteUserCallLogParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.delete<string>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
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
  async get(
    queryParams?: ReadUserCallRecordParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<UserCallLogRecord> {
    if (this.callRecordId === null) {
      throw new Error('callRecordId must be specified.');
    }
    const r = await this.rc.get<UserCallLogRecord>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
