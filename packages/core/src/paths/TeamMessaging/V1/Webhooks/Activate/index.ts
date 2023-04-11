import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/activate`;
  }

  /**
   * Activates a webhook by ID.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/webhooks/{webhookId}/activate
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async post(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
