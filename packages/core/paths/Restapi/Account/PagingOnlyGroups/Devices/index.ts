import {RestRequestConfig} from '../../../../../Rest';
import {
  ListPagingGroupDevicesParameters,
  PagingOnlyGroupDevices,
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
    return `${this.parent.path()}/devices`;
  }
  /**
   * Returns the list of paging devices assigned to this group.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/devices
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyDevices
   */
  async get(
    queryParams?: ListPagingGroupDevicesParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<PagingOnlyGroupDevices> {
    const r = await this.rc.get<PagingOnlyGroupDevices>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
