import {RestRequestConfig} from '../../../../../Rest';
import {AccountLockedSettingResponse} from '../../../../../definitions';
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
    return `${this.parent.path()}/locked-settings`;
  }

  /**
   * Operation: Get Locked Meeting Settings
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/meeting/locked-settings
   */
  async get(config?: RestRequestConfig): Promise<AccountLockedSettingResponse> {
    const r = await this.rc.get<AccountLockedSettingResponse>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
