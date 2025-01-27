import Utils from "../../../../Utils.js";
import TMAddFileRequest from "../../../../definitions/TMAddFileRequest.js";
import CreateGlipFileNewParameters from "../../../../definitions/CreateGlipFileNewParameters.js";
import CreateGlipFileNewRequest from "../../../../definitions/CreateGlipFileNewRequest.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/files`;
  }
  /**
   * Posts a file.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/files
   * Rate Limit Group: Heavy
   * App Permission: TeamMessaging
   */
  public async post(
    createGlipFileNewRequest: CreateGlipFileNewRequest,
    queryParams?: CreateGlipFileNewParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<TMAddFileRequest> {
    const formData = await Utils.getFormData(createGlipFileNewRequest);
    const r = await this.rc.post<TMAddFileRequest>(
      this.path(),
      formData,
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
