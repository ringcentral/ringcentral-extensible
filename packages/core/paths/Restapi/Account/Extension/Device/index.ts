import {RestRequestConfig} from '../../../../../Rest';
import {
  GetExtensionDevicesResponse,
  ListExtensionDevicesParameters,
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
    return `${this.parent.path()}/device`;
  }

  /**
   * Operation: Get Extension Device List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/device
   */
  async get(
    queryParams?: ListExtensionDevicesParameters,
    config?: RestRequestConfig
  ): Promise<GetExtensionDevicesResponse> {
    const r = await this.rc.get<GetExtensionDevicesResponse>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }
}

export default Index;
