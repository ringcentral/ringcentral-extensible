import CloudRecordings from "../../../../../definitions/CloudRecordings.js";
import GetAccountRecordingsParameters from "../../../../../definitions/GetAccountRecordingsParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/recordings`;
  }
  /**
   * Returns the list of meeting recordings owned by all users of the account.
   *
   * HTTP Method: get
   * Endpoint: /rcvideo/v1/account/{accountId}/recordings
   * Rate Limit Group: Light
   * App Permission: Video
   */
  public async get(
    queryParams?: GetAccountRecordingsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CloudRecordings> {
    const r = await this.rc.get<CloudRecordings>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
