import Supervise from './Supervise';
import Parties from './Parties';
import {RestRequestConfig} from '../../../../../Rest';
import {
  ReadCallSessionStatusParameters,
  CallSessionObject,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  telephonySessionId: string | null;

  constructor(parent: Parent, telephonySessionId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.telephonySessionId = telephonySessionId;
  }
  path(withParameter = true): string {
    if (withParameter && this.telephonySessionId !== null) {
      return `${this.parent.path()}/sessions/${this.telephonySessionId}`;
    }
    return `${this.parent.path()}/sessions`;
  }
  /**
   * Returns the status of a call session by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  async get(
    queryParams?: ReadCallSessionStatusParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<CallSessionObject> {
    if (this.telephonySessionId === null) {
      throw new Error('telephonySessionId must be specified.');
    }
    const r = await this.rc.get<CallSessionObject>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Drops a call session.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.telephonySessionId === null) {
      throw new Error('telephonySessionId must be specified.');
    }
    const r = await this.rc.delete<string>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  parties(partyId: string | null = null): Parties {
    return new Parties(this, partyId);
  }

  supervise(): Supervise {
    return new Supervise(this);
  }
}
export default Index;
