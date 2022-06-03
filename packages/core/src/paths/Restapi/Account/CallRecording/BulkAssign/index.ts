import BulkAccountCallRecordingsResource from '../../../../../definitions/BulkAccountCallRecordingsResource';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/bulk-assign`;
  }

  /**
   * Creates or updates the list of extensions to be recorded.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-recording/bulk-assign
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyInfo
   */
  async post(bulkAccountCallRecordingsResource: BulkAccountCallRecordingsResource, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), bulkAccountCallRecordingsResource, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
