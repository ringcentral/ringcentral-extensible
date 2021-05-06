import {RestRequestConfig} from '../../../../Rest';
import {GlipPreferencesInfo} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
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
   * Returns information about user preferences.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/preferences
   * Rate Limit Group: Medium
   * App Permission: Glip
   * User Permission: Glip
   */
  async get(
    restRequestConfig?: RestRequestConfig
  ): Promise<GlipPreferencesInfo> {
    const r = await this.rc.get<GlipPreferencesInfo>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}

export default Index;
