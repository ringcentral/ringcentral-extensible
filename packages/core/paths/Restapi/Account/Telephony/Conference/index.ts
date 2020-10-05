import {RestRequestConfig} from '../../../../../Rest';
import {CallSessionObject} from '../../../../../definitions';
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
    return `${this.parent.path()}/conference`;
  }

  /**
   * Operation: Start Conference Call Session
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/telephony/conference
   */
  async post(config?: RestRequestConfig): Promise<CallSessionObject> {
    const r = await this.rc.post<CallSessionObject>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
