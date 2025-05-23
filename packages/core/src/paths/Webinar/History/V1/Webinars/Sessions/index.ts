import Participants from "./Participants/index.js";
import Invitees from "./Invitees/index.js";
import HistorySessionResource from "../../../../../../definitions/HistorySessionResource.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public sessionId: string | null;

  public constructor(
    _parent: ParentInterface,
    sessionId: string | null = null,
  ) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.sessionId = sessionId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.sessionId !== null) {
      return `${this._parent.path()}/sessions/${this.sessionId}`;
    }
    return `${this._parent.path()}/sessions`;
  }
  /**
   * Returns a historical webinar Session by ID. Access allowed to participants with original role as Host or CoHost.
   * HTTP Method: get
   * Endpoint: /webinar/history/v1/webinars/{webinarId}/sessions/{sessionId}
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<HistorySessionResource> {
    if (this.sessionId === null) {
      throw new Error("sessionId must be specified.");
    }
    const r = await this.rc.get<HistorySessionResource>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public invitees(inviteeId: string | null = null): Invitees {
    return new Invitees(this, inviteeId);
  }

  public participants(): Participants {
    return new Participants(this);
  }
}
export default Index;
