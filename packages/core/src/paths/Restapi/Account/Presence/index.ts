import type AccountPresenceInfo from "../../../../definitions/AccountPresenceInfo.js";
import type ReadAccountPresenceParameters from "../../../../definitions/ReadAccountPresenceParameters.js";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/presence`;
  }
  /**
   * Returns the presence status of all extensions of an account.
   *
   * Note: for the extension types listed below, `presenceStatus` is always returned
   * as `Offline`, and the `telephonyStatus`, `message`, `userStatus`, and `dndStatus`
   * attributes are not returned at all:
   *
   * - Department
   * - Announcement Only
   * - Voicemail (Take Messages Only)
   * - Fax User
   * - Paging Only Group
   * - Shared Lines Group
   * - IVR Menu
   * - Application Extension
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/presence
   * Rate Limit Group: Heavy
   * App Permission: ReadPresence
   * User Permission: ReadPresenceStatus
   */
  public async get(
    queryParams?: ReadAccountPresenceParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AccountPresenceInfo> {
    const r = await this.rc.get<AccountPresenceInfo>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
