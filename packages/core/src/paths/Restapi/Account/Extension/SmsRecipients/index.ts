import type SmsRecipientsResource from "../../../../../definitions/SmsRecipientsResource.js";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";
import BulkAssign from "./BulkAssign/index.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/sms-recipients`;
  }
  /**
   * Returns a list of Extension's SMS recipients.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/sms-recipients
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<SmsRecipientsResource> {
    const r = await this.rc.get<SmsRecipientsResource>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}
export default Index;
