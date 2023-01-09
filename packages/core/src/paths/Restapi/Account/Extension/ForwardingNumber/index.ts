import UpdateForwardingNumberRequest from '../../../../../definitions/UpdateForwardingNumberRequest';
import ForwardingNumberResource from '../../../../../definitions/ForwardingNumberResource';
import DeleteForwardingNumbersRequest from '../../../../../definitions/DeleteForwardingNumbersRequest';
import ForwardingNumberInfo from '../../../../../definitions/ForwardingNumberInfo';
import CreateForwardingNumberRequest from '../../../../../definitions/CreateForwardingNumberRequest';
import GetExtensionForwardingNumberListResponse from '../../../../../definitions/GetExtensionForwardingNumberListResponse';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  forwardingNumberId: string | null;

  constructor(parent: ParentInterface, forwardingNumberId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.forwardingNumberId = forwardingNumberId;
  }

  path(withParameter = true): string {
    if (withParameter && this.forwardingNumberId !== null) {
      return `${this.parent.path()}/forwarding-number/${this.forwardingNumberId}`;
    }
    return `${this.parent.path()}/forwarding-number`;
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
  async list(restRequestConfig?: RestRequestConfig): Promise<GetExtensionForwardingNumberListResponse> {
    const r = await this.rc.get<GetExtensionForwardingNumberListResponse>(this.path(false), undefined, restRequestConfig);
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
  async post(createForwardingNumberRequest: CreateForwardingNumberRequest, restRequestConfig?: RestRequestConfig): Promise<ForwardingNumberInfo> {
    const r = await this.rc.post<ForwardingNumberInfo>(this.path(false), createForwardingNumberRequest, undefined, restRequestConfig);
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
  async deleteAll(deleteForwardingNumbersRequest: DeleteForwardingNumbersRequest, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.delete<string>(this.path(false), deleteForwardingNumbersRequest, undefined, restRequestConfig);
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
  async get(restRequestConfig?: RestRequestConfig): Promise<ForwardingNumberResource> {
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
  async put(updateForwardingNumberRequest: UpdateForwardingNumberRequest, restRequestConfig?: RestRequestConfig): Promise<ForwardingNumberInfo> {
    if (this.forwardingNumberId === null) {
      throw new Error('forwardingNumberId must be specified.');
    }
    const r = await this.rc.put<ForwardingNumberInfo>(this.path(), updateForwardingNumberRequest, undefined, restRequestConfig);
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
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.forwardingNumberId === null) {
      throw new Error('forwardingNumberId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
