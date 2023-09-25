import type CompanyPhoneNumberInfo from '../../../../definitions/CompanyPhoneNumberInfo';
import type AccountPhoneNumbers from '../../../../definitions/AccountPhoneNumbers';
import type ListAccountPhoneNumbersParameters from '../../../../definitions/ListAccountPhoneNumbersParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public phoneNumberId: string | null;

  public constructor(_parent: ParentInterface, phoneNumberId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.phoneNumberId = phoneNumberId;
  }

  public path(withParameter = true): string {
    if (withParameter && this.phoneNumberId !== null) {
      return `${this._parent.path()}/phone-number/${this.phoneNumberId}`;
    }
    return `${this._parent.path()}/phone-number`;
  }

  /**
   * Returns the list of phone numbers assigned to RingCentral customer
   * account. Both company-level and extension-level numbers are returned.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/phone-number
   * Rate Limit Group: Heavy
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyPhoneNumbers
   */
  public async list(
    queryParams?: ListAccountPhoneNumbersParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AccountPhoneNumbers> {
    const r = await this.rc.get<AccountPhoneNumbers>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns phone number(s) belonging to a certain account or extension
   * by phoneNumberId(s). Batch request is supported.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/phone-number/{phoneNumberId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyPhoneNumbers
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<CompanyPhoneNumberInfo> {
    if (this.phoneNumberId === null) {
      throw new Error('phoneNumberId must be specified.');
    }
    const r = await this.rc.get<CompanyPhoneNumberInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
