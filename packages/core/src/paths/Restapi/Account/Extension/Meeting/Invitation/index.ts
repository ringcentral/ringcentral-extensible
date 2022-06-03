import PublicMeetingInvitationResponse from '../../../../../../definitions/PublicMeetingInvitationResponse';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/invitation`;
  }

  /**
   * Returns a meeting invitation by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting/{meetingId}/invitation
   * Rate Limit Group: Light
   * App Permission: Meetings
   * User Permission: Meetings
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<PublicMeetingInvitationResponse> {
    const r = await this.rc.get<PublicMeetingInvitationResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
