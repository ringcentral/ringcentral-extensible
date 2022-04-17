import { RestRequestConfig } from '../../../../../Rest';
import { BulkAccountCallRecordingsResource } from '../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
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
  async post(
    bulkAccountCallRecordingsResource: BulkAccountCallRecordingsResource,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      bulkAccountCallRecordingsResource,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
