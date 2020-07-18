import {RestRequestConfig} from '../../../../Rest';
import {
  AccountPhoneNumbers,
  ListAccountPhoneNumbersParameters,
  CompanyPhoneNumberInfo,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  phoneNumberId: string | null;
  parent: Parent;

  constructor(parent: Parent, phoneNumberId: string | null = null) {
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
   * Operation: Get Company Phone Number List
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/phone-number
   */
  async list(
    queryParams?: ListAccountPhoneNumbersParameters,
    config?: RestRequestConfig
  ): Promise<AccountPhoneNumbers> {
    const r = await this.rc.get<AccountPhoneNumbers>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Phone Number
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/phone-number/{phoneNumberId}
   */
  async get(config?: RestRequestConfig): Promise<CompanyPhoneNumberInfo> {
    if (this.phoneNumberId === null) {
      throw new Error('phoneNumberId must be specified.');
    }

    const r = await this.rc.get<CompanyPhoneNumberInfo>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
