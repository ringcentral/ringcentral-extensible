import Sessions from "./Sessions/index";
import WebinarResource from "../../../../../definitions/WebinarResource";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public webinarId: string | null;

  public constructor(
    _parent: ParentInterface,
    webinarId: string | null = null,
  ) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.webinarId = webinarId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.webinarId !== null) {
      return `${this._parent.path()}/webinars/${this.webinarId}`;
    }
    return `${this._parent.path()}/webinars`;
  }
  /**
   * Returns a historical webinar information by ID (host interface)
   * HTTP Method: get
   * Endpoint: /webinar/history/v1/webinars/{webinarId}
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<WebinarResource> {
    if (this.webinarId === null) {
      throw new Error("webinarId must be specified.");
    }
    const r = await this.rc.get<WebinarResource>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public sessions(sessionId: string | null = null): Sessions {
    return new Sessions(this, sessionId);
  }
}
export default Index;
