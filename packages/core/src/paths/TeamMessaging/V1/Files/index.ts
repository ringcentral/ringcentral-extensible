import Utils from '../../../../Utils';
import TMAddFileRequest from '../../../../definitions/TMAddFileRequest';
import CreateGlipFileNewParameters from '../../../../definitions/CreateGlipFileNewParameters';
import CreateGlipFileNewRequest from '../../../../definitions/CreateGlipFileNewRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/files`;
  }

  /**
   * Posts a file.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/files
   * Rate Limit Group: Heavy
   * App Permission: TeamMessaging
   */
  public async post(createGlipFileNewRequest: CreateGlipFileNewRequest, queryParams?: CreateGlipFileNewParameters, restRequestConfig?: RestRequestConfig): Promise<TMAddFileRequest> {
    const formData = await Utils.getFormData(createGlipFileNewRequest);
    const r = await this.rc.post<TMAddFileRequest>(this.path(), formData, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;