import UpdateEveryoneTeamRequest from "../../../../definitions/UpdateEveryoneTeamRequest.js";
import EveryoneTeamInfo from "../../../../definitions/EveryoneTeamInfo.js";
import {
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
    return `${this._parent.path()}/everyone`;
  }
  /**
   * Returns information about "Everyone" chat (a company level chat which includes all employees).
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/everyone
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<EveryoneTeamInfo> {
    const r = await this.rc.get<EveryoneTeamInfo>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates "Everyone" chat information.
   * HTTP Method: patch
   * Endpoint: /team-messaging/v1/everyone
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async patch(
    updateEveryoneTeamRequest: UpdateEveryoneTeamRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<EveryoneTeamInfo> {
    const r = await this.rc.patch<EveryoneTeamInfo>(
      this.path(),
      updateEveryoneTeamRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
