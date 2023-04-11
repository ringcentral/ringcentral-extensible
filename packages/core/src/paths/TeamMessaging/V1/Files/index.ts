import Utils from '../../../../Utils';
import TMAddFileRequest from '../../../../definitions/TMAddFileRequest';
import CreateGlipFileNewParameters from '../../../../definitions/CreateGlipFileNewParameters';
import CreateGlipFileNewRequest from '../../../../definitions/CreateGlipFileNewRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/files`;
  }

  /**
   * Posts a file.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/files
   * Rate Limit Group: Heavy
   * App Permission: TeamMessaging
   */
  async post(createGlipFileNewRequest: CreateGlipFileNewRequest, queryParams?: CreateGlipFileNewParameters, restRequestConfig?: RestRequestConfig): Promise<TMAddFileRequest> {
    const formData = await Utils.getFormData(createGlipFileNewRequest);
    const r = await this.rc.post<TMAddFileRequest>(this.path(), formData, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
