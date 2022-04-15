import Utils from '../../../../../Utils';
import { RestRequestConfig } from '../../../../../Rest';
import {
  CreateCustomUserGreetingRequest,
  CreateCustomUserGreetingParameters,
  CustomUserGreetingInfo,
} from '../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  greetingId: string | null;

  constructor(parent: Parent, greetingId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.greetingId = greetingId;
  }

  path(withParameter = true): string {
    if (withParameter && this.greetingId !== null) {
      return `${this.parent.path()}/greeting/${this.greetingId}`;
    }
    return `${this.parent.path()}/greeting`;
  }

  /**
   * Creates custom greeting for an extension user.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/greeting
   * Rate Limit Group: Heavy
   * App Permission: EditExtensions
   * User Permission: EditUserAnsweringRules
   */
  async post(
    createCustomUserGreetingRequest: CreateCustomUserGreetingRequest,
    queryParams?: CreateCustomUserGreetingParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CustomUserGreetingInfo> {
    const formData = Utils.getFormData(createCustomUserGreetingRequest);
    const r = await this.rc.post<CustomUserGreetingInfo>(
      this.path(false),
      formData,
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns a custom user greeting by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/greeting/{greetingId}
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadUserInfo
   */
  async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<CustomUserGreetingInfo> {
    if (this.greetingId === null) {
      throw new Error('greetingId must be specified.');
    }
    const r = await this.rc.get<CustomUserGreetingInfo>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
