import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/end`;
  }

  /**
   * Ends a meetings which is in progress.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting/{meetingId}/end
   * Rate Limit Group: Medium
   * App Permission: Meetings
   * User Permission: Meetings
   */
  async post(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
