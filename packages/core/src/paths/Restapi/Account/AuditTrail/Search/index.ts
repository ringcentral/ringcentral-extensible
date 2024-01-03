import type AccountHistorySearchPublicResponse from '../../../../../definitions/AccountHistorySearchPublicResponse';
import type AccountHistorySearchPublicRequest from '../../../../../definitions/AccountHistorySearchPublicRequest';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/search`;
  }
  /**
   * Returns the audit trail data with specific filters applied.
   * Audit trail searching is limited to the last 10,000 records or last 180 days, whichever comes first.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/audit-trail/search
   * Rate Limit Group: Heavy
   * App Permission: ReadAuditTrail
   */
  public async post(
    accountHistorySearchPublicRequest: AccountHistorySearchPublicRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AccountHistorySearchPublicResponse> {
    const r = await this.rc.post<AccountHistorySearchPublicResponse>(
      this.path(),
      accountHistorySearchPublicRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
