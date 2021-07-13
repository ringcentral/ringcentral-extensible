import {RestRequestConfig} from '../../../../../Rest';
import {AccountLockedSettingResponse} from '../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../..';

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
   * Returns information on user meeting settings that are locked on account level and therefore cannot be changed by user.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/meeting/locked-settings
   * Rate Limit Group: Light
   * App Permission: Meetings
   * User Permission: Meetings
   */
  async get(
    restRequestConfig?: RestRequestConfig
  ): Promise<AccountLockedSettingResponse> {
    const r = await this.rc.get<AccountLockedSettingResponse>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
