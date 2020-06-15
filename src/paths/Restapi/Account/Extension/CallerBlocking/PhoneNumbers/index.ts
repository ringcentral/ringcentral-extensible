import {RestRequestConfig} from '../../../../../../Rest';
import {
  BlockedAllowedPhoneNumbersList,
  ListBlockedAllowedNumbersParameters,
  BlockedAllowedPhoneNumberInfo,
  AddBlockedAllowedPhoneNumber,
} from '../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../..';

class Index {
  rc: RingCentral;
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
    queryParams?: ListBlockedAllowedNumbersParameters,
    config?: RestRequestConfig
  ): Promise<BlockedAllowedPhoneNumbersList> {
    const r = await this.rc.get<BlockedAllowedPhoneNumbersList>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Add Blocked/Allowed Number
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers
   */
  async post(
    addBlockedAllowedPhoneNumber: AddBlockedAllowedPhoneNumber,
    config?: RestRequestConfig
  ): Promise<BlockedAllowedPhoneNumberInfo> {
    const r = await this.rc.post<BlockedAllowedPhoneNumberInfo>(
      this.path(false),
      addBlockedAllowedPhoneNumber,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Blocked/Allowed Number
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}
   */
  async get(
    config?: RestRequestConfig
  ): Promise<BlockedAllowedPhoneNumberInfo> {
    if (this.blockedNumberId === null) {
      throw new Error('blockedNumberId must be specified.');
    }

    const r = await this.rc.get<BlockedAllowedPhoneNumberInfo>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Delete Blocked/Allowed Number
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}
   */
  async delete(config?: RestRequestConfig): Promise<string> {
    if (this.blockedNumberId === null) {
      throw new Error('blockedNumberId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), undefined, config);
    return r.data;
  }

  /**
   * Operation: Update Blocked/Allowed Number
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}
   */
  async put(
    addBlockedAllowedPhoneNumber: AddBlockedAllowedPhoneNumber,
    config?: RestRequestConfig
  ): Promise<BlockedAllowedPhoneNumberInfo> {
    if (this.blockedNumberId === null) {
      throw new Error('blockedNumberId must be specified.');
    }

    const r = await this.rc.put<BlockedAllowedPhoneNumberInfo>(
      this.path(),
      addBlockedAllowedPhoneNumber,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
