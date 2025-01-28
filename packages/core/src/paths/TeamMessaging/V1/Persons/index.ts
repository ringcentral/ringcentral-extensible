import TMPersonInfo from "../../../../definitions/TMPersonInfo";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public personId: string | null;

  public constructor(_parent: ParentInterface, personId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.personId = personId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.personId !== null) {
      return `${this._parent.path()}/persons/${this.personId}`;
    }
    return `${this._parent.path()}/persons`;
  }
  /**
   * Returns a user or multiple users by their ID(s).
   * [Batch requests](https://developers.ringcentral.com/guide/basics/batch-requests) are supported.
   *
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/persons/{personId}
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<TMPersonInfo> {
    if (this.personId === null) {
      throw new Error("personId must be specified.");
    }
    const r = await this.rc.get<TMPersonInfo>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
