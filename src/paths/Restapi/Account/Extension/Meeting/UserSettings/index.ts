import {RestRequestConfig} from '../../../../../../Rest';
import {MeetingUserSettingsResponse} from '../../../../../../definitions';
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
    return `${this.parent.path()}/user-settings`;
  }

  /**
   * Operation: Get Meeting User Settings
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/user-settings
   */
  async get(config?: RestRequestConfig): Promise<MeetingUserSettingsResponse> {
    const r = await this.rc.get<MeetingUserSettingsResponse>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
