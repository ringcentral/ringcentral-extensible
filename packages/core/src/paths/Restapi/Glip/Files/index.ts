import Utils from '../../../../Utils';
import PostGlipFile from '../../../../definitions/PostGlipFile';
import CreateGlipFileParameters from '../../../../definitions/CreateGlipFileParameters';
import CreateGlipFileRequest from '../../../../definitions/CreateGlipFileRequest';
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
   * Endpoint: /restapi/{apiVersion}/glip/files
   * Rate Limit Group: Heavy
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async post(createGlipFileRequest: CreateGlipFileRequest, queryParams?: CreateGlipFileParameters, restRequestConfig?: RestRequestConfig): Promise<PostGlipFile> {
    const formData = Utils.getFormData(createGlipFileRequest);
    const r = await this.rc.post<PostGlipFile>(this.path(), formData, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
