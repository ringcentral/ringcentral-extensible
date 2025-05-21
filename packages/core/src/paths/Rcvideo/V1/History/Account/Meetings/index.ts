import AdminAccessMeetings from "../../../../../../definitions/AdminAccessMeetings.js";
import ListAccountMeetingsParameters from "../../../../../../definitions/ListAccountMeetingsParameters.js";
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
    return `${this._parent.path()}/meetings`;
  }
  /**
   * Returns the list of completed meetings owned by all users of the account.
   *
   * HTTP Method: get
   * Endpoint: /rcvideo/v1/history/account/{accountId}/meetings
   * Rate Limit Group: Light
   * App Permission: Video
   */
  public async get(
    queryParams?: ListAccountMeetingsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AdminAccessMeetings> {
    const r = await this.rc.get<AdminAccessMeetings>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
