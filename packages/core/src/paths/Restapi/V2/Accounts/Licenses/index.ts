import BulkAssign from './BulkAssign';
import type LicensesStatisticsResponse from '../../../../../definitions/LicensesStatisticsResponse';
import type ListLicensesV2Parameters from '../../../../../definitions/ListLicensesV2Parameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/licenses`;
  }

  /**
   * Returns the information about account licenses.
   * License blocks are grouped by "skuId", "assigned" flag and "costCenterId".
   * Only recurring licenses are returned.
   *
   * HTTP Method: get
   * Endpoint: /restapi/v2/accounts/{accountId}/licenses
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: LicensesAndInventory
   */
  public async get(
    queryParams?: ListLicensesV2Parameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<LicensesStatisticsResponse> {
    const r = await this.rc.get<LicensesStatisticsResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }

  public bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}
export default Index;
