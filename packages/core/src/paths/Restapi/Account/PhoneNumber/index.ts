import CompanyPhoneNumberInfo from '../../../../definitions/CompanyPhoneNumberInfo';
import AccountPhoneNumbers from '../../../../definitions/AccountPhoneNumbers';
import ListAccountPhoneNumbersParameters from '../../../../definitions/ListAccountPhoneNumbersParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  phoneNumberId: string | null;

  constructor(parent: ParentInterface, phoneNumberId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.phoneNumberId = phoneNumberId;
  }

  path(withParameter = true): string {
    if (withParameter && this.phoneNumberId !== null) {
      return `${this.parent.path()}/phone-number/${this.phoneNumberId}`;
    }
    return `${this.parent.path()}/phone-number`;
  }

  /**
   * Returns the list of phone numbers assigned to RingCentral customer account. Both company-level and extension-level numbers are returned.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/phone-number
   * Rate Limit Group: Heavy
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyPhoneNumbers
   */
  async list(queryParams?: ListAccountPhoneNumbersParameters, restRequestConfig?: RestRequestConfig): Promise<AccountPhoneNumbers> {
    const r = await this.rc.get<AccountPhoneNumbers>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns the phone number(s) belonging to a certain account or extension by phoneNumberId(s). Batch request is supported.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/phone-number/{phoneNumberId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyPhoneNumbers
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<CompanyPhoneNumberInfo> {
    if (this.phoneNumberId === null) {
      throw new Error('phoneNumberId must be specified.');
    }
    const r = await this.rc.get<CompanyPhoneNumberInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
