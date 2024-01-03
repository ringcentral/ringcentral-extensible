import type CallRecordingIds from '../../../../definitions/CallRecordingIds';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/call-recordings`;
  }
  /**
   * Deletes company call recordings by their IDs.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-recordings
   * Rate Limit Group: Heavy
   * App Permission: EditCallLog
   * User Permission: EditCompanyCallRecordings
   */
  public async delete(callRecordingIds: CallRecordingIds, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.delete<string>(this.path(), callRecordingIds, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
