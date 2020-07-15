import {RestRequestConfig} from '../../../../../Rest';
import {
  GetExtensionPhoneNumbersResponse,
  ListExtensionPhoneNumbersParameters,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/phone-number`;
  }

  /**
   * Operation: Get Extension Phone Number List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/phone-number
   */
  async get(
    queryParams?: ListExtensionPhoneNumbersParameters,
    config?: RestRequestConfig
  ): Promise<GetExtensionPhoneNumbersResponse> {
    const r = await this.rc.get<GetExtensionPhoneNumbersResponse>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }
}

export default Index;
