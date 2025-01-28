import DeleteDeviceFromInventoryResponse from "../../../../../definitions/DeleteDeviceFromInventoryResponse";
import DeleteDeviceFromInventoryRequest from "../../../../../definitions/DeleteDeviceFromInventoryRequest";
import AddDeviceToInventoryResponse from "../../../../../definitions/AddDeviceToInventoryResponse";
import AddDeviceToInventoryRequest from "../../../../../definitions/AddDeviceToInventoryRequest";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/device-inventory`;
  }
  /**
   * Adds an existing phone (customer provided device - BYOD) as an unassigned device to the account inventory.
   * HTTP Method: post
   * Endpoint: /restapi/v2/accounts/{accountId}/device-inventory
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   */
  public async post(
    addDeviceToInventoryRequest: AddDeviceToInventoryRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AddDeviceToInventoryResponse> {
    const r = await this.rc.post<AddDeviceToInventoryResponse>(
      this.path(),
      addDeviceToInventoryRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Deletes an existing unassigned (without digital line or phone number) device or multiple devices
   * from the account inventory. It is possible to delete up to 10 devices per request.
   *
   * HTTP Method: delete
   * Endpoint: /restapi/v2/accounts/{accountId}/device-inventory
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   */
  public async delete(
    deleteDeviceFromInventoryRequest: DeleteDeviceFromInventoryRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<DeleteDeviceFromInventoryResponse> {
    const r = await this.rc.delete<DeleteDeviceFromInventoryResponse>(
      this.path(),
      deleteDeviceFromInventoryRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
