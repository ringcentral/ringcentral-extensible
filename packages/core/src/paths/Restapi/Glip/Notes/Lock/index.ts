import { RestRequestConfig } from '../../../../../Rest';
import Parent from '..';
import { RingCentral } from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/lock`;
  }

  /**
   * Locks a note providing the user with the unique write access for 5 hours.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/glip/notes/{noteId}/lock
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async post(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
