import CloudRecordings from "../../../../../../definitions/CloudRecordings.js";
import GetExtensionRecordingsParameters from "../../../../../../definitions/GetExtensionRecordingsParameters.js";
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
    return `${this._parent.path()}/recordings`;
  }
  /**
   * Returns all recordings available for specific extension.
   * This endpoint is used in admin recording service, not regular web
   *
   * HTTP Method: get
   * Endpoint: /rcvideo/v1/account/{accountId}/extension/{extensionId}/recordings
   * Rate Limit Group: Light
   * App Permission: Video
   */
  public async get(
    queryParams?: GetExtensionRecordingsParameters,
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
