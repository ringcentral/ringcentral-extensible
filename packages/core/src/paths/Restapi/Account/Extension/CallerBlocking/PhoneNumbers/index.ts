import type BlockedAllowedPhoneNumberInfo from '../../../../../../definitions/BlockedAllowedPhoneNumberInfo';
import type AddBlockedAllowedPhoneNumber from '../../../../../../definitions/AddBlockedAllowedPhoneNumber';
import type BlockedAllowedPhoneNumbersList from '../../../../../../definitions/BlockedAllowedPhoneNumbersList';
import type ListBlockedAllowedNumbersParameters from '../../../../../../definitions/ListBlockedAllowedNumbersParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public blockedNumberId: string | null;

  public constructor(_parent: ParentInterface, blockedNumberId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.blockedNumberId = blockedNumberId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.blockedNumberId !== null) {
      return `${this._parent.path()}/phone-numbers/${this.blockedNumberId}`;
    }
    return `${this._parent.path()}/phone-numbers`;
  }
  /**
   * Returns the lists of blocked and allowed phone numbers.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadBlockedNumbers
   */
  public async list(
    queryParams?: ListBlockedAllowedNumbersParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<BlockedAllowedPhoneNumbersList> {
    const r = await this.rc.get<BlockedAllowedPhoneNumbersList>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Updates either blocked or allowed phone number list with a new phone number.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: EditBlockedNumbers
   */
  public async post(
    addBlockedAllowedPhoneNumber: AddBlockedAllowedPhoneNumber,
    restRequestConfig?: RestRequestConfig,
  ): Promise<BlockedAllowedPhoneNumberInfo> {
    const r = await this.rc.post<BlockedAllowedPhoneNumberInfo>(
      this.path(false),
      addBlockedAllowedPhoneNumber,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns blocked or allowed phone number(s) by their ID(s). Batch request is supported.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadBlockedNumbers
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<BlockedAllowedPhoneNumberInfo> {
    if (this.blockedNumberId === null) {
      throw new Error('blockedNumberId must be specified.');
    }
    const r = await this.rc.get<BlockedAllowedPhoneNumberInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates blocked or allowed phone number(s) by their ID(s). Batch request is supported.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: EditBlockedNumbers
   */
  public async put(
    addBlockedAllowedPhoneNumber: AddBlockedAllowedPhoneNumber,
    restRequestConfig?: RestRequestConfig,
  ): Promise<BlockedAllowedPhoneNumberInfo> {
    if (this.blockedNumberId === null) {
      throw new Error('blockedNumberId must be specified.');
    }
    const r = await this.rc.put<BlockedAllowedPhoneNumberInfo>(
      this.path(),
      addBlockedAllowedPhoneNumber,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Deletes blocked or allowed phone number(s) by their ID(s). Batch request is supported.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: EditBlockedNumbers
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.blockedNumberId === null) {
      throw new Error('blockedNumberId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), {}, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
