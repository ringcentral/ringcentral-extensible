import {RestRequestConfig} from '../../../../../Rest';
import {CallRecordingExtensions} from '../../../../../definitions';
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
    return `${this.parent.path()}/extensions`;
  }

  /**
   * Operation: Get Call Recording Extension List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/call-recording/extensions
   */
  async get(config?: RestRequestConfig): Promise<CallRecordingExtensions> {
    const r = await this.rc.get<CallRecordingExtensions>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
