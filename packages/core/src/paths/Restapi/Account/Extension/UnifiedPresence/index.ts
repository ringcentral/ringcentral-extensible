import UpdateUnifiedPresence from '../../../../../definitions/UpdateUnifiedPresence';
import UnifiedPresence from '../../../../../definitions/UnifiedPresence';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/unified-presence`;
  }

  /**
   * Returns the unified presence status of the requested user(s). The set of parameters returned by this method differs whether you return the requester's presence or any other user presence.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/unified-presence
   * Rate Limit Group: Medium
   * App Permission: ReadPresence
   * User Permission: ReadPresenceStatus
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<UnifiedPresence> {
    const r = await this.rc.get<UnifiedPresence>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates the unified presence for the current user specified in path.
   * HTTP Method: patch
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/unified-presence
   * Rate Limit Group: Medium
   * App Permission: EditPresence
   * User Permission: EditPresenceStatus
   */
  async patch(updateUnifiedPresence: UpdateUnifiedPresence, restRequestConfig?: RestRequestConfig): Promise<UnifiedPresence> {
    const r = await this.rc.patch<UnifiedPresence>(this.path(), updateUnifiedPresence, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
