import {
  UserCallLogResponse,
  ReadUserCallLogParameters,
  DeleteUserCallLogParameters,
  UserCallLogRecord,
  ReadUserCallRecordParameters,
} from '../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../..';

class CallLog {
  rc: RestClient;
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
   * Operation: Get User Call Log Records
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log
   */
  async list(
    queryParams?: ReadUserCallLogParameters
  ): Promise<UserCallLogResponse> {
    const r = await this.rc.get(this.path(false), queryParams);
    return r.data;
  }

  /**
   * Operation: Delete User Call Log
   * Rate Limit Group: Heavy
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log
   */
  async delete(queryParams?: DeleteUserCallLogParameters): Promise<string> {
    const r = await this.rc.delete(this.path(false), queryParams);
    return r.data;
  }

  /**
   * Operation: Get User Call Record
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}
   */
  async get(
    queryParams?: ReadUserCallRecordParameters
  ): Promise<UserCallLogRecord> {
    if (this.callRecordId === null) {
      throw new Error('callRecordId must be specified.');
    }

    const r = await this.rc.get(this.path(), queryParams);
    return r.data;
  }
}

export default CallLog;
