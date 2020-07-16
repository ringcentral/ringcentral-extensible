import {RestRequestConfig} from '../../../../../Rest';
import {
  UnifiedPresence,
  UpdateUnifiedPresence,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/unified-presence`;
  }

  /**
   * Operation: Get Unified Presence
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/unified-presence
   */
  async get(config?: RestRequestConfig): Promise<UnifiedPresence> {
    const r = await this.rc.get<UnifiedPresence>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Unified Presence
   * Rate Limit Group: Medium
   * Http patch /restapi/v1.0/account/{accountId}/extension/{extensionId}/unified-presence
   */
  async patch(
    updateUnifiedPresence: UpdateUnifiedPresence,
    config?: RestRequestConfig
  ): Promise<UnifiedPresence> {
    const r = await this.rc.patch<UnifiedPresence>(
      this.path(),
      updateUnifiedPresence,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
