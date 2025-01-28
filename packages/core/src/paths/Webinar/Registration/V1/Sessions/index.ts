import Registrants from "./Registrants/index";
import RegSessionModel from "../../../../../definitions/RegSessionModel";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

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
   * Returns a registration Session information by ID.
   *
   * A caller must be an authorized user: either a host of the webinar or an IT Admin:
   * a user from host's account with "WebinarSettings" permission.
   *
   * HTTP Method: get
   * Endpoint: /webinar/registration/v1/sessions/{sessionId}
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<RegSessionModel> {
    if (this.sessionId === null) {
      throw new Error("sessionId must be specified.");
    }
    const r = await this.rc.get<RegSessionModel>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates a Session by ID.
   *
   * This is a PARTIAL update (PATCH), client may call it providing only attributes which are to be changed.
   *
   * A caller must be an authorized user: either a host of the webinar or an IT Admin:
   * a user from host's account with "WebinarSettings" permission.
   *
   * If a session record with given ID doesn't exist on Registration Service side the API should return HTTP 404.
   *
   * HTTP Method: patch
   * Endpoint: /webinar/registration/v1/sessions/{sessionId}
   * Rate Limit Group: Heavy
   * App Permission: EditWebinars
   */
  public async patch(
    regSessionModel: RegSessionModel,
    restRequestConfig?: RestRequestConfig,
  ): Promise<RegSessionModel> {
    if (this.sessionId === null) {
      throw new Error("sessionId must be specified.");
    }
    const r = await this.rc.patch<RegSessionModel>(
      this.path(),
      regSessionModel,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public registrants(registrantId: string | null = null): Registrants {
    return new Registrants(this, registrantId);
  }
}
export default Index;
