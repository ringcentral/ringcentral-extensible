import {CallRecordingExtensions} from '../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../..';

class Extensions {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/extensions`;
  }

  /**
   * Operation: Get Call Recording Extension List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/call-recording/extensions
   */
  async get(): Promise<CallRecordingExtensions> {
    const r = await this.rc.get(this.path());
    return r.data;
  }
}

export default Extensions;
