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
   * Returns user settings for meetings.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting/user-settings
   * Rate Limit Group: Light
   * App Permission: Meetings
   * User Permission: Meetings
   */
  async get(
    restRequestConfig?: RestRequestConfig
  ): Promise<MeetingUserSettingsResponse> {
    const r = await this.rc.get<MeetingUserSettingsResponse>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
