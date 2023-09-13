import BulkAccountCallRecordingsResource from '../../../../../definitions/BulkAccountCallRecordingsResource';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/bulk-assign`;
  }

  /**
   * Creates or updates the list of extensions to be recorded.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-recording/bulk-assign
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyInfo
   */
  public async post(bulkAccountCallRecordingsResource: BulkAccountCallRecordingsResource, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), bulkAccountCallRecordingsResource, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
