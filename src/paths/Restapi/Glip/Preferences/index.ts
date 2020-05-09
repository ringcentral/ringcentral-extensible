import {GlipPreferencesInfo} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Preferences {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/preferences`;
  }

  /**
   * Operation: Get Preferences
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/preferences
   */
  async get(): Promise<GlipPreferencesInfo> {
    const r = await this.rc.get<GlipPreferencesInfo>(this.path());
    return r.data;
  }
}

export default Preferences;
