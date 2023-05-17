import BulkManageLicensesResponse from '../../../../../../definitions/BulkManageLicensesResponse';
import BulkManageLicensesRequest from '../../../../../../definitions/BulkManageLicensesRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/bulk-assign`;
  }

  /**
   * Assigns/unassigns multiple account licenses in bulk
   * HTTP Method: post
   * Endpoint: /restapi/v2/accounts/{accountId}/licenses/bulk-assign
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   */
  public async post(bulkManageLicensesRequest: BulkManageLicensesRequest, restRequestConfig?: RestRequestConfig): Promise<BulkManageLicensesResponse> {
    const r = await this.rc.post<BulkManageLicensesResponse>(this.path(), bulkManageLicensesRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
