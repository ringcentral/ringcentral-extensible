import type CloudRecordings from '../../../../../definitions/CloudRecordings';
import type GetAccountRecordingsParameters from '../../../../../definitions/GetAccountRecordingsParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

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
   * Returns all account recordings.
   * This endpoint is used in Admin recording service, not regular web
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
    const r = await this.rc.get<CloudRecordings>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
