import Parent from '..';
import RestClient from '../../../../..';

class Activate {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/activate`;
  }

  /**
   * Operation: Activate Webhook
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/webhooks/{webhookId}/activate
   */
  async post(): Promise<string> {
    const r = await this.rc.post<string>(this.path());
    return r.data;
  }
}

export default Activate;
