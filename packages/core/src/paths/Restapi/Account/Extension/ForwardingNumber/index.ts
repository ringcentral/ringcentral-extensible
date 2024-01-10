import type UpdateForwardingNumberRequest from '../../../../../definitions/UpdateForwardingNumberRequest';
import type ForwardingNumberResource from '../../../../../definitions/ForwardingNumberResource';
import type DeleteForwardingNumbersRequest from '../../../../../definitions/DeleteForwardingNumbersRequest';
import type ForwardingNumberInfo from '../../../../../definitions/ForwardingNumberInfo';
import type CreateForwardingNumberRequest from '../../../../../definitions/CreateForwardingNumberRequest';
import type GetExtensionForwardingNumberListResponse from '../../../../../definitions/GetExtensionForwardingNumberListResponse';
import type ListForwardingNumbersParameters from '../../../../../definitions/ListForwardingNumbersParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public forwardingNumberId: string | null;

  public constructor(_parent: ParentInterface, forwardingNumberId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.forwardingNumberId = forwardingNumberId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.forwardingNumberId !== null) {
      return `${this._parent.path()}/forwarding-number/${this.forwardingNumberId}`;
    }
    return `${this._parent.path()}/forwarding-number`;
  }
  /**
   * Returns the list of extension phone numbers used for call forwarding
   * and call flip. The returned list contains all the extension phone numbers
   * used for call forwarding and call flip.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/forwarding-number
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadUserForwardingFlipNumbers
   */
  public async list(
    queryParams?: ListForwardingNumbersParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetExtensionForwardingNumberListResponse> {
    const r = await this.rc.get<GetExtensionForwardingNumberListResponse>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Adds a new forwarding number to the forwarding number list.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/forwarding-number
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: EditUserForwardingFlipNumbers
   */
  public async post(
    createForwardingNumberRequest: CreateForwardingNumberRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ForwardingNumberInfo> {
    const r = await this.rc.post<ForwardingNumberInfo>(
      this.path(false),
      createForwardingNumberRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Deletes multiple forwarding numbers from the forwarding number list by IDs.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/forwarding-number
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: EditUserForwardingFlipNumbers
   */
  public async deleteAll(
    deleteForwardingNumbersRequest: DeleteForwardingNumbersRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.delete<string>(
      this.path(false),
      deleteForwardingNumbersRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns a specific forwarding number.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadUserForwardingFlipNumbers
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<ForwardingNumberResource> {
    if (this.forwardingNumberId === null) {
      throw new Error('forwardingNumberId must be specified.');
    }
    const r = await this.rc.get<ForwardingNumberResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates the existing forwarding number from the forwarding number list.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: EditUserForwardingFlipNumbers
   */
  public async put(
    updateForwardingNumberRequest: UpdateForwardingNumberRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ForwardingNumberInfo> {
    if (this.forwardingNumberId === null) {
      throw new Error('forwardingNumberId must be specified.');
    }
    const r = await this.rc.put<ForwardingNumberInfo>(
      this.path(),
      updateForwardingNumberRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Deletes a forwarding number from the forwarding number list by its ID.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: EditUserForwardingFlipNumbers
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.forwardingNumberId === null) {
      throw new Error('forwardingNumberId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), {}, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
