import {RestRequestConfig} from '../../../../../../Rest';
import Parent from '..';
import RingCentral from '../../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/end`;
  }

  /**
   * Operation: End Meeting
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}/end
   */
  async post(config?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), undefined, config);
    return r.data;
  }
}

export default Index;
