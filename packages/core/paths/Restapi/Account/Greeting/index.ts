import Utils from '../../../../Utils';
import {RestRequestConfig} from '../../../../Rest';
import {
  CreateCompanyGreetingRequest,
  CustomCompanyGreetingInfo,
} from '../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/greeting`;
  }
  /**
   * Creates a custom company greeting.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/greeting
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: ReadUserInfo
   */
  async post(
    createCompanyGreetingRequest: CreateCompanyGreetingRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<CustomCompanyGreetingInfo> {
    const formData = Utils.getFormData(createCompanyGreetingRequest);
    const r = await this.rc.post<CustomCompanyGreetingInfo>(
      this.path(),
      formData,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
