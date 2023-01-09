import LockedSettings from './LockedSettings';
import MeetingResponseResource from '../../../../definitions/MeetingResponseResource';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  meetingId: string | null;

  constructor(parent: ParentInterface, meetingId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.meetingId = meetingId;
  }

  path(withParameter = true): string {
    if (withParameter && this.meetingId !== null) {
      return `${this.parent.path()}/meeting/${this.meetingId}`;
    }
    return `${this.parent.path()}/meeting`;
  }

  /**
   * Returns a particular account-level meeting details by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/meeting/{meetingId}
   * Rate Limit Group: Light
   * App Permission: Meetings
   * User Permission: Meetings
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<MeetingResponseResource> {
    if (this.meetingId === null) {
      throw new Error('meetingId must be specified.');
    }
    const r = await this.rc.get<MeetingResponseResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  lockedSettings(): LockedSettings {
    return new LockedSettings(this);
  }
}
export default Index;
