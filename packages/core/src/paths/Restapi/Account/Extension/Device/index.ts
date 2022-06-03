import GetExtensionDevicesResponse from '../../../../../definitions/GetExtensionDevicesResponse';
import ListExtensionDevicesParameters from '../../../../../definitions/ListExtensionDevicesParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/device`;
  }

  /**
   * Returns devices of the extension(s) by their ID(s). Batch request is supported
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/device
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadUserDevices
   */
  async get(queryParams?: ListExtensionDevicesParameters, restRequestConfig?: RestRequestConfig): Promise<GetExtensionDevicesResponse> {
    const r = await this.rc.get<GetExtensionDevicesResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
