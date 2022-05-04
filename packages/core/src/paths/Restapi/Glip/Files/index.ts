import Utils from '../../../../Utils';
import { RestRequestConfig } from '../../../../Rest';
import { CreateGlipFileRequest, CreateGlipFileParameters, PostGlipFile } from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
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
