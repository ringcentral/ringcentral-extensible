import {RestRequestConfig} from '../../../Rest';
import Parent from '..';
import RingCentral from '../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/status`;
  }

  /**
   * Operation: Get Service Status
   * Rate Limit Group: NoThrottling
   * Http get /restapi/v1.0/status
   */
  async get(config?: RestRequestConfig): Promise<string> {
    const r = await this.rc.get<string>(this.path(), undefined, config);
    return r.data;
  }
}

export default Index;
