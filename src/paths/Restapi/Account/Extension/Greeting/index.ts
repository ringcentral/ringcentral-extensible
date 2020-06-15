import {RestRequestConfig} from '../../../../../Rest';
import {
  CustomUserGreetingInfo,
  CreateCustomUserGreetingRequest,
} from '../../../../../definitions';
import Utils from '../../../../../Utils';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  greetingId: string | null;
  parent: Parent;

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
   * Operation: Create Custom User Greeting
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting
   */
  async post(
    createCustomUserGreetingRequest: CreateCustomUserGreetingRequest,
    config?: RestRequestConfig
  ): Promise<CustomUserGreetingInfo> {
    const formData = Utils.getFormData(createCustomUserGreetingRequest);
    const r = await this.rc.post<CustomUserGreetingInfo>(
      this.path(false),
      formData,
      undefined,
      {...config, headers: {...config?.headers, ...formData.getHeaders()}}
    );
    return r.data;
  }

  /**
   * Operation: Get Custom Greeting
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting/{greetingId}
   */
  async get(config?: RestRequestConfig): Promise<CustomUserGreetingInfo> {
    if (this.greetingId === null) {
      throw new Error('greetingId must be specified.');
    }

    const r = await this.rc.get<CustomUserGreetingInfo>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
