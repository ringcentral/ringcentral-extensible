import Supervise from './Supervise';
import Parties from './Parties';
import type CallSessionObject from '../../../../../definitions/CallSessionObject';
import type ReadCallSessionStatusParameters from '../../../../../definitions/ReadCallSessionStatusParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public telephonySessionId: string | null;

  public constructor(_parent: ParentInterface, telephonySessionId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.telephonySessionId = telephonySessionId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.telephonySessionId !== null) {
      return `${this._parent.path()}/sessions/${this.telephonySessionId}`;
    }
    return `${this._parent.path()}/sessions`;
  }
  /**
   * Returns the status of a call session by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  public async get(
    queryParams?: ReadCallSessionStatusParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallSessionObject> {
    if (this.telephonySessionId === null) {
      throw new Error('telephonySessionId must be specified.');
    }
    const r = await this.rc.get<CallSessionObject>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Drops a call session.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.telephonySessionId === null) {
      throw new Error('telephonySessionId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), {}, undefined, restRequestConfig);
    return r.data;
  }

  public parties(partyId: string | null = null): Parties {
    return new Parties(this, partyId);
  }

  public supervise(): Supervise {
    return new Supervise(this);
  }
}
export default Index;
