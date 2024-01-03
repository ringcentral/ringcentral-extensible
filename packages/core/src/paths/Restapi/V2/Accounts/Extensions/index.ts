import Devices from './Devices';
import type BulkDeleteUsersResponse from '../../../../../definitions/BulkDeleteUsersResponse';
import type BulkDeleteUsersRequest from '../../../../../definitions/BulkDeleteUsersRequest';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/extensions`;
  }
  /**
   * Deletes user extension(s) and either keeps or destroys the assets - numbers and devices.
   * Multiple extensions can be deleted with a single API call.
   * **Please note:** This API cannot be tested on Sandbox.
   *
   * HTTP Method: delete
   * Endpoint: /restapi/v2/accounts/{accountId}/extensions
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: Users
   */
  public async delete(
    bulkDeleteUsersRequest: BulkDeleteUsersRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<BulkDeleteUsersResponse> {
    const r = await this.rc.delete<BulkDeleteUsersResponse>(
      this.path(),
      bulkDeleteUsersRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public devices(deviceId: string | null = null): Devices {
    return new Devices(this, deviceId);
  }
}
export default Index;
