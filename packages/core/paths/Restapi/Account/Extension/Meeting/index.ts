import UserSettings from './UserSettings';
import ServiceInfo from './ServiceInfo';
import Invitation from './Invitation';
import End from './End';
import {RestRequestConfig} from '../../../../../Rest';
import {
  MeetingsResource,
  MeetingRequestResource,
  MeetingResponseResource,
} from '../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  meetingId: string | null;

  constructor(parent: Parent, meetingId: string | null = null) {
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
   * Returns a list of user meetings scheduled for the future (meetings of 'Instant' type are not included).
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting
   * Rate Limit Group: Light
   * App Permission: Meetings
   * User Permission: Meetings
   */
  async list(restRequestConfig?: RestRequestConfig): Promise<MeetingsResource> {
    const r = await this.rc.get<MeetingsResource>(
      this.path(false),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Creates a new meeting.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting
   * Rate Limit Group: Medium
   * App Permission: Meetings
   * User Permission: Meetings
   */
  async post(
    meetingRequestResource: MeetingRequestResource,
    restRequestConfig?: RestRequestConfig
  ): Promise<MeetingResponseResource> {
    const r = await this.rc.post<MeetingResponseResource>(
      this.path(false),
      meetingRequestResource,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Returns a particular meetings details by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting/{meetingId}
   * Rate Limit Group: Light
   * App Permission: Meetings
   * User Permission: Meetings
   */
  async get(
    restRequestConfig?: RestRequestConfig
  ): Promise<MeetingResponseResource> {
    if (this.meetingId === null) {
      throw new Error('meetingId must be specified.');
    }
    const r = await this.rc.get<MeetingResponseResource>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Modifies a particular meeting.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting/{meetingId}
   * Rate Limit Group: Medium
   * App Permission: Meetings
   * User Permission: Meetings
   */
  async put(
    meetingRequestResource: MeetingRequestResource,
    restRequestConfig?: RestRequestConfig
  ): Promise<MeetingResponseResource> {
    if (this.meetingId === null) {
      throw new Error('meetingId must be specified.');
    }
    const r = await this.rc.put<MeetingResponseResource>(
      this.path(),
      meetingRequestResource,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Deletes a scheduled meeting.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting/{meetingId}
   * Rate Limit Group: Medium
   * App Permission: Meetings
   * User Permission: Meetings
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.meetingId === null) {
      throw new Error('meetingId must be specified.');
    }
    const r = await this.rc.delete<string>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  end(): End {
    return new End(this);
  }

  invitation(): Invitation {
    return new Invitation(this);
  }

  serviceInfo(): ServiceInfo {
    return new ServiceInfo(this);
  }

  userSettings(): UserSettings {
    return new UserSettings(this);
  }
}
export default Index;
