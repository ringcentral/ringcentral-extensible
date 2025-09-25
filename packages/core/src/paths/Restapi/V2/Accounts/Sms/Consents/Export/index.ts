import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/export`;
  }
  /**
   * Returns a list of account-level SMS consent records for opted-out and/or opted-in phone numbers in CSV format.
   * The following columns will be included in the resulted CSV file:
   *
   * | Column name | Data type | Description |
   * | ----------- | --------- | ----------- |
   * | From        | string    | The sender's phone number in E.164 format |
   * | To          | string    | The recipient's phone number in E.164 format |
   * | Status      | string    | The consent status, either "OptOut" or "OptIn" |
   * | Source      | string    | The source of the consent record |
   *
   * HTTP Method: get
   * Endpoint: /restapi/v2/accounts/{accountId}/sms/consents/export
   * Rate Limit Group: Light
   * App Permission: SMS
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.get<string>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
