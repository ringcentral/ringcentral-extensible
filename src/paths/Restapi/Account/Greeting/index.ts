import {
  CustomCompanyGreetingInfo,
  CreateCompanyGreetingRequest,
} from '../../../../definitions';
import Utils from '../../../../Utils';
import Parent from '..';
import RingCentral from '../../../..';

class Greeting {
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
   * Operation: Create Company Greeting
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/account/{accountId}/greeting
   */
  async post(
    createCompanyGreetingRequest: CreateCompanyGreetingRequest
  ): Promise<CustomCompanyGreetingInfo> {
    const formData = Utils.getFormData(createCompanyGreetingRequest);
    const r = await this.rc.post<CustomCompanyGreetingInfo>(
      this.path(),
      formData,
      undefined,
      {headers: formData.getHeaders()}
    );
    return r.data;
  }
}

export default Greeting;
