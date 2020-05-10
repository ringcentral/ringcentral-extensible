import {RestRequestConfig} from '../../../Rest';
import Parent from '..';
import RingCentral from '../../..';

class Health {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/health`;
  }

  /**
   * Operation: Check Health
   * Rate Limit Group: NoThrottling
   * Http get /scim/v2/health
   */
  async get(config?: RestRequestConfig): Promise<string> {
    const r = await this.rc.get<string>(this.path(), undefined, config);
    return r.data;
  }
}

export default Health;
