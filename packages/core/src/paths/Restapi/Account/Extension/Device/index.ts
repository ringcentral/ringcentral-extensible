import GetExtensionDevicesResponse from '../../../../../definitions/GetExtensionDevicesResponse';
import ListExtensionDevicesParameters from '../../../../../definitions/ListExtensionDevicesParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/device`;
  }

  /**
   * Returns devices of an extension or multiple extensions by their ID(s). Batch request
 * is supported.
 *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/device
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadUserDevices
   */
  public async get(queryParams?: ListExtensionDevicesParameters, restRequestConfig?: RestRequestConfig): Promise<GetExtensionDevicesResponse> {
    const r = await this.rc.get<GetExtensionDevicesResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
