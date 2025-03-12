import SmsConfigurationResource from "../../../../../../definitions/SmsConfigurationResource.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/sms-configuration`;
  }
  /**
   * Returns SMS configuration for the specified phone number of the extension.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/phone-number/{phoneNumberId}/sms-configuration
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<SmsConfigurationResource> {
    const r = await this.rc.get<SmsConfigurationResource>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
