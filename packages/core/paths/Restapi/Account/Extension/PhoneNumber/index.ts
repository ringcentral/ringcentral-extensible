import {RestRequestConfig} from '../../../../../Rest';
import {
  ListExtensionPhoneNumbersParameters,
  GetExtensionPhoneNumbersResponse,
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
   * Returns the list of phone numbers that are used by a particular extension, and can be filtered by the phone number type. The returned list contains all numbers which are directly mapped to a given extension plus the features and also company-level numbers which may be used when performing different operations on behalf of this extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/phone-number
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadUserPhoneNumbers
   */
  async get(
    queryParams?: ListExtensionPhoneNumbersParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<GetExtensionPhoneNumbersResponse> {
    const r = await this.rc.get<GetExtensionPhoneNumbersResponse>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
