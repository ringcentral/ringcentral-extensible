import Recordings from "./Recordings/index.js";
import Supervise from "./Supervise/index.js";
import BringIn from "./BringIn/index.js";
import Transfer from "./Transfer/index.js";
import Forward from "./Forward/index.js";
import Pickup from "./Pickup/index.js";
import Answer from "./Answer/index.js";
import Bridge from "./Bridge/index.js";
import Ignore from "./Ignore/index.js";
import Reject from "./Reject/index.js";
import Unhold from "./Unhold/index.js";
import Reply from "./Reply/index.js";
import Park from "./Park/index.js";
import Flip from "./Flip/index.js";
import Hold from "./Hold/index.js";
import PartyUpdateRequest from "../../../../../../definitions/PartyUpdateRequest.js";
import CallParty from "../../../../../../definitions/CallParty.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public partyId: string | null;

  public constructor(_parent: ParentInterface, partyId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.partyId = partyId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.partyId !== null) {
      return `${this._parent.path()}/parties/${this.partyId}`;
    }
    return `${this._parent.path()}/parties`;
  }
  /**
   * Returns a call party status by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<CallParty> {
    if (this.partyId === null) {
      throw new Error("partyId must be specified.");
    }
    const r = await this.rc.get<CallParty>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Deletes a party from a call session by ID. A party can be deleted only if supervised or parked. It is possible to delete only one conference participant per request.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.partyId === null) {
      throw new Error("partyId must be specified.");
    }
    const r = await this.rc.delete<string>(
      this.path(),
      {},
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Modifies a call party by ID. There is a known limitation for Mute scenario - mute via REST API doesn't work with mute placed via RingCentral apps or HardPhone. It means that if you muted participant via Call Control API and RingCentral Desktop app you need to unmute both endpoints to bring the media back.
   * HTTP Method: patch
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  public async patch(
    partyUpdateRequest: PartyUpdateRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallParty> {
    if (this.partyId === null) {
      throw new Error("partyId must be specified.");
    }
    const r = await this.rc.patch<CallParty>(
      this.path(),
      partyUpdateRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public hold(): Hold {
    return new Hold(this);
  }

  public flip(): Flip {
    return new Flip(this);
  }

  public park(): Park {
    return new Park(this);
  }

  public reply(): Reply {
    return new Reply(this);
  }

  public unhold(): Unhold {
    return new Unhold(this);
  }

  public reject(): Reject {
    return new Reject(this);
  }

  public ignore(): Ignore {
    return new Ignore(this);
  }

  public bridge(): Bridge {
    return new Bridge(this);
  }

  public answer(): Answer {
    return new Answer(this);
  }

  public pickup(): Pickup {
    return new Pickup(this);
  }

  public forward(): Forward {
    return new Forward(this);
  }

  public transfer(): Transfer {
    return new Transfer(this);
  }

  public bringIn(): BringIn {
    return new BringIn(this);
  }

  public supervise(): Supervise {
    return new Supervise(this);
  }

  public recordings(recordingId: string | null = null): Recordings {
    return new Recordings(this, recordingId);
  }
}
export default Index;
