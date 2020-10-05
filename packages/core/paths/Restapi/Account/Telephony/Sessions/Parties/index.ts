import Supervise from './Supervise';
import Recordings from './Recordings';
import Park from './Park';
import Flip from './Flip';
import Reply from './Reply';
import Forward from './Forward';
import Pickup from './Pickup';
import Answer from './Answer';
import Bridge from './Bridge';
import Transfer from './Transfer';
import Ignore from './Ignore';
import Reject from './Reject';
import Unhold from './Unhold';
import Hold from './Hold';
import BringIn from './BringIn';
import {RestRequestConfig} from '../../../../../../Rest';
import {CallParty, PartyUpdateRequest} from '../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../..';

class Index {
  rc: RingCentral;
  partyId: string | null;
  parent: Parent;

  constructor(parent: Parent, partyId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.partyId = partyId;
  }

  path(withParameter = true): string {
    if (withParameter && this.partyId !== null) {
      return `${this.parent.path()}/parties/${this.partyId}`;
    }

    return `${this.parent.path()}/parties`;
  }

  /**
   * Operation: Get Call Party Status
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}
   */
  async get(config?: RestRequestConfig): Promise<CallParty> {
    if (this.partyId === null) {
      throw new Error('partyId must be specified.');
    }

    const r = await this.rc.get<CallParty>(this.path(), undefined, config);
    return r.data;
  }

  /**
   * Operation: Delete Call Party
   * Rate Limit Group: Light
   * Http delete /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}
   */
  async delete(config?: RestRequestConfig): Promise<string> {
    if (this.partyId === null) {
      throw new Error('partyId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), undefined, config);
    return r.data;
  }

  /**
   * Operation: Update Call Party
   * Rate Limit Group: Light
   * Http patch /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}
   */
  async patch(
    partyUpdateRequest: PartyUpdateRequest,
    config?: RestRequestConfig
  ): Promise<CallParty> {
    if (this.partyId === null) {
      throw new Error('partyId must be specified.');
    }

    const r = await this.rc.patch<CallParty>(
      this.path(),
      partyUpdateRequest,
      undefined,
      config
    );
    return r.data;
  }

  bringIn(): BringIn {
    return new BringIn(this);
  }

  hold(): Hold {
    return new Hold(this);
  }

  unhold(): Unhold {
    return new Unhold(this);
  }

  reject(): Reject {
    return new Reject(this);
  }

  ignore(): Ignore {
    return new Ignore(this);
  }

  transfer(): Transfer {
    return new Transfer(this);
  }

  bridge(): Bridge {
    return new Bridge(this);
  }

  answer(): Answer {
    return new Answer(this);
  }

  pickup(): Pickup {
    return new Pickup(this);
  }

  forward(): Forward {
    return new Forward(this);
  }

  reply(): Reply {
    return new Reply(this);
  }

  flip(): Flip {
    return new Flip(this);
  }

  park(): Park {
    return new Park(this);
  }

  recordings(recordingId: string | null = null): Recordings {
    return new Recordings(this, recordingId);
  }

  supervise(): Supervise {
    return new Supervise(this);
  }
}

export default Index;
