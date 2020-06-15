import {RestRequestConfig} from '../../../../../Rest';
import {
  GetExtensionForwardingNumberListResponse,
  ListForwardingNumbersParameters,
  ForwardingNumberInfo,
  CreateForwardingNumberRequest,
  UpdateForwardingNumberRequest,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  forwardingNumberId: string | null;
  parent: Parent;

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
   * Operation: Get Forwarding Number List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number
   */
  async list(
    queryParams?: ListForwardingNumbersParameters,
    config?: RestRequestConfig
  ): Promise<GetExtensionForwardingNumberListResponse> {
    const r = await this.rc.get<GetExtensionForwardingNumberListResponse>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Create Forwarding Number
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number
   */
  async post(
    createForwardingNumberRequest: CreateForwardingNumberRequest,
    config?: RestRequestConfig
  ): Promise<ForwardingNumberInfo> {
    const r = await this.rc.post<ForwardingNumberInfo>(
      this.path(false),
      createForwardingNumberRequest,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Forwarding Number
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}
   */
  async get(config?: RestRequestConfig): Promise<ForwardingNumberInfo> {
    if (this.forwardingNumberId === null) {
      throw new Error('forwardingNumberId must be specified.');
    }

    const r = await this.rc.get<ForwardingNumberInfo>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Forwarding Number
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}
   */
  async put(
    updateForwardingNumberRequest: UpdateForwardingNumberRequest,
    config?: RestRequestConfig
  ): Promise<ForwardingNumberInfo> {
    if (this.forwardingNumberId === null) {
      throw new Error('forwardingNumberId must be specified.');
    }

    const r = await this.rc.put<ForwardingNumberInfo>(
      this.path(),
      updateForwardingNumberRequest,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Delete Forwarding Number
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}
   */
  async delete(config?: RestRequestConfig): Promise<string> {
    if (this.forwardingNumberId === null) {
      throw new Error('forwardingNumberId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), undefined, config);
    return r.data;
  }
}

export default Index;
