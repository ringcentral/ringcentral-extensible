import {
  BlockedAllowedPhoneNumbersList,
  ListBlockedAllowedNumbersParameters,
  BlockedAllowedPhoneNumberInfo,
  AddBlockedAllowedPhoneNumber,
} from '../../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../../..';

class PhoneNumbers {
  rc: RestClient;
  blockedNumberId: string | null;
  parent: Parent;

  constructor(parent: Parent, blockedNumberId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.blockedNumberId = blockedNumberId;
  }

  path(withParameter = true): string {
    if (withParameter && this.blockedNumberId !== null) {
      return `${this.parent.path()}/phone-numbers/${this.blockedNumberId}`;
    }

    return `${this.parent.path()}/phone-numbers`;
  }

  /**
   * Operation: Get Blocked/Allowed Phone Numbers
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers
   */
  async list(
    queryParams?: ListBlockedAllowedNumbersParameters
  ): Promise<BlockedAllowedPhoneNumbersList> {
    const r = await this.rc.get(this.path(false), queryParams);
    return r.data;
  }

  /**
   * Operation: Add Blocked/Allowed Number
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers
   */
  async post(
    addBlockedAllowedPhoneNumber: AddBlockedAllowedPhoneNumber
  ): Promise<BlockedAllowedPhoneNumberInfo> {
    const r = await this.rc.post(
      this.path(false),
      addBlockedAllowedPhoneNumber
    );
    return r.data;
  }

  /**
   * Operation: Get Blocked/Allowed Number
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}
   */
  async get(): Promise<BlockedAllowedPhoneNumberInfo> {
    if (this.blockedNumberId === null) {
      throw new Error('blockedNumberId must be specified.');
    }

    const r = await this.rc.get(this.path());
    return r.data;
  }

  /**
   * Operation: Delete Blocked/Allowed Number
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}
   */
  async delete(): Promise<string> {
    if (this.blockedNumberId === null) {
      throw new Error('blockedNumberId must be specified.');
    }

    const r = await this.rc.delete(this.path());
    return r.data;
  }

  /**
   * Operation: Update Blocked/Allowed Number
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}
   */
  async put(
    addBlockedAllowedPhoneNumber: AddBlockedAllowedPhoneNumber
  ): Promise<BlockedAllowedPhoneNumberInfo> {
    if (this.blockedNumberId === null) {
      throw new Error('blockedNumberId must be specified.');
    }

    const r = await this.rc.put(this.path(), addBlockedAllowedPhoneNumber);
    return r.data;
  }
}

export default PhoneNumbers;
