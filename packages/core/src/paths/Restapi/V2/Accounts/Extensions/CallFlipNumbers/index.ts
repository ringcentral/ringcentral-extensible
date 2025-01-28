import CallFlipNumberListResource from "../../../../../../definitions/CallFlipNumberListResource";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/call-flip-numbers`;
  }
  /**
   * Returns call flip settings. Call flip destination is an extension level setting.
   * The following numbers can be used for call flip:
   *
   * * User's DL numbers (added/removed automatically by the System)
   * * PSTN numbers in E.164 format (added/removed manually by User)
   *
   * Call flip list is generally limited up to 10 numbers.
   *
   * **Please note:** This API is only working with the new Communication Handling flow.
   * To ensure that please check if the 'NewCallHandlingAndForwarding' feature is supported.
   *
   * HTTP Method: get
   * Endpoint: /restapi/v2/accounts/{accountId}/extensions/{extensionId}/call-flip-numbers
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallFlipNumberListResource> {
    const r = await this.rc.get<CallFlipNumberListResource>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates call flip settings. Call flip destination is an extension level setting.
   * The following numbers can be used for call flip:
   *
   * * User's DL numbers (added/removed automatically by the System)
   * * PSTN numbers in E.164 format (added/removed manually by User)
   *
   * Call flip list is generally limited up to 10 numbers.
   *
   * **Please note:** This API is only working with the new Communication Handling flow.
   * To ensure that please check if the 'NewCallHandlingAndForwarding' feature is supported.
   *
   * HTTP Method: put
   * Endpoint: /restapi/v2/accounts/{accountId}/extensions/{extensionId}/call-flip-numbers
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   */
  public async put(
    callFlipNumberListResource: CallFlipNumberListResource,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallFlipNumberListResource> {
    const r = await this.rc.put<CallFlipNumberListResource>(
      this.path(),
      callFlipNumberListResource,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
