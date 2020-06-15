import {RestRequestConfig} from '../../../../../Rest';
import {
  PagingOnlyGroupDevices,
  ListPagingGroupDevicesParameters,
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
   * Operation: Get Paging Group Devices
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/devices
   */
  async get(
    queryParams?: ListPagingGroupDevicesParameters,
    config?: RestRequestConfig
  ): Promise<PagingOnlyGroupDevices> {
    const r = await this.rc.get<PagingOnlyGroupDevices>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }
}

export default Index;
