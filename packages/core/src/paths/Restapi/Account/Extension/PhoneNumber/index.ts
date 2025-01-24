import type GetExtensionPhoneNumbersResponse from "../../../../../definitions/GetExtensionPhoneNumbersResponse";
import type ListExtensionPhoneNumbersParameters from "../../../../../definitions/ListExtensionPhoneNumbersParameters";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/phone-number`;
  }
  /**
   * Returns the list of phone numbers that are used by a particular extension,
   * can be filtered by the phone number type. The returned list contains all
   * numbers which are directly mapped to the given extension. Plus the features
   * and company-level numbers that may be used when performing different operations
   * on behalf of this extension.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/phone-number
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadUserPhoneNumbers
   */
  public async get(
    queryParams?: ListExtensionPhoneNumbersParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetExtensionPhoneNumbersResponse> {
    const r = await this.rc.get<GetExtensionPhoneNumbersResponse>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
