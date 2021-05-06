import Recordings from './Recordings';
import Supervise from './Supervise';
import BringIn from './BringIn';
import Transfer from './Transfer';
import Forward from './Forward';
import Pickup from './Pickup';
import Answer from './Answer';
import Bridge from './Bridge';
import Ignore from './Ignore';
import Reject from './Reject';
import Unhold from './Unhold';
import Reply from './Reply';
import Park from './Park';
import Flip from './Flip';
import Hold from './Hold';
import {RestRequestConfig} from '../../../../../../Rest';
import {CallParty, PartyUpdateRequest} from '../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  partyId: string | null;

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
   * Returns a call party status by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<CallParty> {
    if (this.partyId === null) {
      throw new Error('partyId must be specified.');
    }

    const r = await this.rc.get<CallParty>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Removes a party from a call session by ID. A party can be deleted only if supervised or parked. It is possible to delete only one conference participant per request.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}
   * Rate Limit Group: Light
   * App Permission: TelephonySessions
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.partyId === null) {
      throw new Error('partyId must be specified.');
    }

    const r = await this.rc.delete<string>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Modifies a call party by ID. There is a known limitation for Mute scenario - mute via REST API doesn't work with mute placed via RingCentral apps or HardPhone. It means that if you muted participant via Call Control API and Ringcentral Desktop app you need to unmute both endpoints to bring the media back.
   * HTTP Method: patch
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  async patch(
    partyUpdateRequest: PartyUpdateRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<CallParty> {
    if (this.partyId === null) {
      throw new Error('partyId must be specified.');
    }

    const r = await this.rc.patch<CallParty>(
      this.path(),
      partyUpdateRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  hold(): Hold {
    return new Hold(this);
  }

  flip(): Flip {
    return new Flip(this);
  }

  park(): Park {
    return new Park(this);
  }

  reply(): Reply {
    return new Reply(this);
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

  transfer(): Transfer {
    return new Transfer(this);
  }

  bringIn(): BringIn {
    return new BringIn(this);
  }

  supervise(): Supervise {
    return new Supervise(this);
  }

  recordings(recordingId: string | null = null): Recordings {
    return new Recordings(this, recordingId);
  }
}

export default Index;
