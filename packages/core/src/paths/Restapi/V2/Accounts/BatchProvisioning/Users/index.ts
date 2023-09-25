import type BatchProvisionUsersResponse from '../../../../../../definitions/BatchProvisionUsersResponse';
import type BatchProvisionUsersRequest from '../../../../../../definitions/BatchProvisionUsersRequest';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/users`;
  }

  /**
   * Creates multiple user extensions with BYOD (customer provided) devices.
   * If "extensionNumber" is not specified, the next available extension number will be assigned.
   *
   * HTTP Method: post
   * Endpoint: /restapi/v2/accounts/{accountId}/batch-provisioning/users
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   */
  public async post(
    batchProvisionUsersRequest: BatchProvisionUsersRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<BatchProvisionUsersResponse> {
    const r = await this.rc.post<BatchProvisionUsersResponse>(
      this.path(),
      batchProvisionUsersRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
