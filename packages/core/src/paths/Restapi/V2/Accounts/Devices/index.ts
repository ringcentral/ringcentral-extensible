import BulkAdd from './BulkAdd';
import type RemoveLineResponse from '../../../../../definitions/RemoveLineResponse';
import type RemoveLineRequest from '../../../../../definitions/RemoveLineRequest';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public deviceId: string | null;

  public constructor(_parent: ParentInterface, deviceId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.deviceId = deviceId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.deviceId !== null) {
      return `${this._parent.path()}/devices/${this.deviceId}`;
    }
    return `${this._parent.path()}/devices`;
  }
  /**
   * Disassociates phone line (DL & Device) from an extension.
   *  - if value ```keepAssetsInInventory == true```,
   * the given device is moved to unassigned devices and the number is moved to the number inventory;
   *  - if value ```keepAssetsInInventory == false```, the given device and number is removed from the account;
   *  - if the parameter keepAssetsInInventory is not set (empty body),
   * default value ```keepAssetsInInventory == true``` is used.
   *
   * HTTP Method: delete
   * Endpoint: /restapi/v2/accounts/{accountId}/devices/{deviceId}
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditAccountDevices
   */
  public async delete(
    removeLineRequest: RemoveLineRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<RemoveLineResponse> {
    if (this.deviceId === null) {
      throw new Error('deviceId must be specified.');
    }
    const r = await this.rc.delete<RemoveLineResponse>(this.path(), removeLineRequest, undefined, restRequestConfig);
    return r.data;
  }

  public bulkAdd(): BulkAdd {
    return new BulkAdd(this);
  }
}
export default Index;
