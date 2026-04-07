import {
  RingCentralInterface,
  ParentInterface,
  RestRequestConfig,
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
   * | Column name           | Data type | Description                                                      |
   * |-----------------------|-----------|------------------------------------------------------------------|
   * | External Party Number | string    | Sender's number in E.164 format                                  |
   * | Internal Party Number | string    | Recipient's number in E.164 format                               |
   * | Consent Status        | string    | Consent status, either "OptOut" or "OptIn"                       |
   * | Source                | string    | Source of the consent record                                     |
   * | Coverage              | string    | Coverage of this consent record (Account is returned as Company) |
   * | Campaign Type         | string    | Campaign type for this consent record                            |
   * | Notes                 | string    | Notes and comments regarding this consent record                 |
   * | Last Modified Time    | string    | Last Modified Time in ISO 8601 format                            |
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
