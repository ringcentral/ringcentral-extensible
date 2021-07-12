import {RestRequestConfig} from '../../../../../Rest';
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
    return `${this.parent.path()}/activate`;
  }
  /**
   * Activates a webhook by ID.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/glip/webhooks/{webhookId}/activate
   * Rate Limit Group: Medium
   * App Permission: Glip
   * User Permission: Glip
   */
  async post(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
