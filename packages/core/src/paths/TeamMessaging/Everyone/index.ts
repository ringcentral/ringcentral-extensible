import UpdateEveryoneTeamRequest from '../../../definitions/UpdateEveryoneTeamRequest';
import EveryoneTeamInfo from '../../../definitions/EveryoneTeamInfo';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/everyone`;
  }

  /**
   * Returns information about "Everyone" chat (a company level chat which includes all employees).
   * HTTP Method: get
   * Endpoint: /team-messaging/{version}/everyone
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<EveryoneTeamInfo> {
    const r = await this.rc.get<EveryoneTeamInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates "Everyone" chat information.
   * HTTP Method: patch
   * Endpoint: /team-messaging/{version}/everyone
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async patch(updateEveryoneTeamRequest: UpdateEveryoneTeamRequest, restRequestConfig?: RestRequestConfig): Promise<EveryoneTeamInfo> {
    const r = await this.rc.patch<EveryoneTeamInfo>(this.path(), updateEveryoneTeamRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
