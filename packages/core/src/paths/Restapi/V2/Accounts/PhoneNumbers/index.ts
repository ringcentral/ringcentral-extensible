import BulkAdd from "./BulkAdd/index.js";
import Replace from "./Replace/index.js";
import AccountPhoneNumberInfo from "../../../../../definitions/AccountPhoneNumberInfo.js";
import AssignPhoneNumberRequest from "../../../../../definitions/AssignPhoneNumberRequest.js";
import DeletePhoneNumbersResponse from "../../../../../definitions/DeletePhoneNumbersResponse.js";
import DeletePhoneNumbersRequest from "../../../../../definitions/DeletePhoneNumbersRequest.js";
import AccountPhoneNumberList from "../../../../../definitions/AccountPhoneNumberList.js";
import ListAccountPhoneNumbersV2Parameters from "../../../../../definitions/ListAccountPhoneNumbersV2Parameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public phoneNumberId: string | null;

  public constructor(
    _parent: ParentInterface,
    phoneNumberId: string | null = null,
  ) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.phoneNumberId = phoneNumberId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.phoneNumberId !== null) {
      return `${this._parent.path()}/phone-numbers/${this.phoneNumberId}`;
    }
    return `${this._parent.path()}/phone-numbers`;
  }
  /**
   * Returns the list of phone numbers assigned to RingCentral customer
   * account. Both company-level and extension-level numbers are returned.
   * Conferencing numbers, hot desk and ELIN numbers are not returned.
   *
   * HTTP Method: get
   * Endpoint: /restapi/v2/accounts/{accountId}/phone-numbers
   * Rate Limit Group: Heavy
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyPhoneNumbers
   */
  public async get(
    queryParams?: ListAccountPhoneNumbersV2Parameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AccountPhoneNumberList> {
    const r = await this.rc.get<AccountPhoneNumberList>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * This method can only delete numbers that of the following usage types:
   *   - `Inventory`,
   *   - `ForwardedNumber`,
   *   - `ForwardedCompanyNumber`.
   *
   * In other words, this method will not delete numbers which are in use on the account - extension direct numbers,
   * main number, etc. It is possible to indicate phone numbers to be deleted using their IDs or exact string values
   * in e.164 format. However, the same lookup method (by ID or by value) must be used for all numbers within the same API call.
   *
   * HTTP Method: delete
   * Endpoint: /restapi/v2/accounts/{accountId}/phone-numbers
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditCompanyPhoneNumbers
   */
  public async delete(
    deletePhoneNumbersRequest: DeletePhoneNumbersRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<DeletePhoneNumbersResponse> {
    const r = await this.rc.delete<DeletePhoneNumbersResponse>(
      this.path(false),
      deletePhoneNumbersRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Assigns or reassigns a phone number as a company or extension number.
   *
   * Assign scenarios supported:
   * - from inventory to a company number;
   * - from inventory to an extension number.
   *
   * Reassign scenarios supported:
   * - from an extension to another extension;
   * - from an extension to a company number;
   * - from a company number to an extension.
   *
   * HTTP Method: patch
   * Endpoint: /restapi/v2/accounts/{accountId}/phone-numbers/{phoneNumberId}
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditCompanyPhoneNumbers
   */
  public async patch(
    assignPhoneNumberRequest: AssignPhoneNumberRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AccountPhoneNumberInfo> {
    if (this.phoneNumberId === null) {
      throw new Error("phoneNumberId must be specified.");
    }
    const r = await this.rc.patch<AccountPhoneNumberInfo>(
      this.path(),
      assignPhoneNumberRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public replace(): Replace {
    return new Replace(this);
  }

  public bulkAdd(taskId: string | null = null): BulkAdd {
    return new BulkAdd(this, taskId);
  }
}
export default Index;
