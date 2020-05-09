import {GlipWebhookInfo, GlipWebhookList} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Webhooks {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/webhooks`;
  }

  /**
   * Operation: Create Webhook in Group
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/groups/{groupId}/webhooks
   */
  async post(): Promise<GlipWebhookInfo> {
    const r = await this.rc.post<GlipWebhookInfo>(this.path());
    return r.data;
  }

  /**
   * Operation: Get Webhooks in Group
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/groups/{groupId}/webhooks
   */
  async get(): Promise<GlipWebhookList> {
    const r = await this.rc.get<GlipWebhookList>(this.path());
    return r.data;
  }
}

export default Webhooks;
