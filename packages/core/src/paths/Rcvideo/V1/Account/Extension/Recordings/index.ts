import CloudRecordings from '../../../../../../definitions/CloudRecordings';
import GetExtensionRecordingsParameters from '../../../../../../definitions/GetExtensionRecordingsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/recordings`;
  }

  /**
   * Returns the list of meeting recordings belonging to particular user.
   * HTTP Method: get
   * Endpoint: /rcvideo/v1/account/{accountId}/extension/{extensionId}/recordings
   * Rate Limit Group: Light
   * App Permission: Video
   */
  public async get(queryParams?: GetExtensionRecordingsParameters, restRequestConfig?: RestRequestConfig): Promise<CloudRecordings> {
    const r = await this.rc.get<CloudRecordings>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
