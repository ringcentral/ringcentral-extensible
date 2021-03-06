import {RestRequestConfig} from '../../../../../Rest';
import {
  ListForwardingNumbersParameters,
  GetExtensionForwardingNumberListResponse,
  CreateForwardingNumberRequest,
  ForwardingNumberInfo,
  UpdateForwardingNumberRequest,
} from '../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  forwardingNumberId: string | null;

  constructor(parent: Parent, forwardingNumberId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.forwardingNumberId = forwardingNumberId;
  }
  path(withParameter = true): string {
    if (withParameter && this.forwardingNumberId !== null) {
      return `${this.parent.path()}/forwarding-number/${
        this.forwardingNumberId
      }`;
    }
    return `${this.parent.path()}/forwarding-number`;
  }
  /**
   * Returns the list of extension phone numbers used for call forwarding and call flip. The returned list contains all the extension phone numbers used for call forwarding and call flip.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/forwarding-number
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadUserForwardingFlipNumbers
   */
  async list(
    queryParams?: ListForwardingNumbersParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<GetExtensionForwardingNumberListResponse> {
    const r = await this.rc.get<GetExtensionForwardingNumberListResponse>(
      this.path(false),
      queryParams,
      restRequestConfig
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
  async post(
    createForwardingNumberRequest: CreateForwardingNumberRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<ForwardingNumberInfo> {
    const r = await this.rc.post<ForwardingNumberInfo>(
      this.path(false),
      createForwardingNumberRequest,
      undefined,
      restRequestConfig
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
  async get(
    restRequestConfig?: RestRequestConfig
  ): Promise<ForwardingNumberInfo> {
    if (this.forwardingNumberId === null) {
      throw new Error('forwardingNumberId must be specified.');
    }
    const r = await this.rc.get<ForwardingNumberInfo>(
      this.path(),
      undefined,
      restRequestConfig
    );
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
  async put(
    updateForwardingNumberRequest: UpdateForwardingNumberRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<ForwardingNumberInfo> {
    if (this.forwardingNumberId === null) {
      throw new Error('forwardingNumberId must be specified.');
    }
    const r = await this.rc.put<ForwardingNumberInfo>(
      this.path(),
      updateForwardingNumberRequest,
      undefined,
      restRequestConfig
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
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.forwardingNumberId === null) {
      throw new Error('forwardingNumberId must be specified.');
    }
    const r = await this.rc.delete<string>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
