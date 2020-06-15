import {RestRequestConfig} from '../../../../../Rest';
import {BulkAccountCallRecordingsResource} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

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
   * Operation: Update Call Recording Extension List
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/account/{accountId}/call-recording/bulk-assign
   */
  async post(
    bulkAccountCallRecordingsResource: BulkAccountCallRecordingsResource,
    config?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      bulkAccountCallRecordingsResource,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
