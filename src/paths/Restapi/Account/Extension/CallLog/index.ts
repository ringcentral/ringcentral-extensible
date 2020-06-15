import {RestRequestConfig} from '../../../../../Rest';
import {
  UserCallLogResponse,
  ReadUserCallLogParameters,
  DeleteUserCallLogParameters,
  UserCallLogRecord,
  ReadUserCallRecordParameters,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
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
   * Operation: Get User Call Log Records
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log
   */
  async list(
    queryParams?: ReadUserCallLogParameters,
    config?: RestRequestConfig
  ): Promise<UserCallLogResponse> {
    const r = await this.rc.get<UserCallLogResponse>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Delete User Call Log
   * Rate Limit Group: Heavy
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log
   */
  async delete(
    queryParams?: DeleteUserCallLogParameters,
    config?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.delete<string>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get User Call Record
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}
   */
  async get(
    queryParams?: ReadUserCallRecordParameters,
    config?: RestRequestConfig
  ): Promise<UserCallLogRecord> {
    if (this.callRecordId === null) {
      throw new Error('callRecordId must be specified.');
    }

    const r = await this.rc.get<UserCallLogRecord>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }
}

export default Index;
