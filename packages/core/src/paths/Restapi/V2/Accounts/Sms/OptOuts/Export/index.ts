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
   * Returns a list of numbers that are opted out and/or opted in at the account level in CSV format.
   * Header row will define the following columns.
   *
   * | Column name | Data type | Description |
   * | ----------- | --------- | ----------- |
   * | From        | string    | Sender phone number in E.164 or the wildcard |
   * | To          | string    | Recipient phone number in E.164 |
   * | Status      | string    | Either "OptOut" or "OptIn" |
   * | Source      | string    | Source of the opt record   |
   *
   * HTTP Method: get
   * Endpoint: /restapi/v2/accounts/{accountId}/sms/opt-outs/export
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
