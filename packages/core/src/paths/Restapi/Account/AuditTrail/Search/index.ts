import AccountHistorySearchPublicResponse from '../../../../../definitions/AccountHistorySearchPublicResponse';
import AccountHistorySearchPublicRequest from '../../../../../definitions/AccountHistorySearchPublicRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/search`;
  }

  /**
   * Returns the audit trail data applying specific filters. Audit trail searching is limited to the last 10,000 records or last 180 days, whichever comes first.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/audit-trail/search
   * Rate Limit Group: Heavy
   * App Permission: ReadAuditTrail
   */
  async post(accountHistorySearchPublicRequest: AccountHistorySearchPublicRequest, restRequestConfig?: RestRequestConfig): Promise<AccountHistorySearchPublicResponse> {
    const r = await this.rc.post<AccountHistorySearchPublicResponse>(this.path(), accountHistorySearchPublicRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
