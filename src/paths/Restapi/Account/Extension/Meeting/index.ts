import End from './End';
import ServiceInfo from './ServiceInfo';
import {RestRequestConfig} from '../../../../../Rest';
import {
  MeetingsResource,
  MeetingResponseResource,
  MeetingRequestResource,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Meeting {
  rc: RingCentral;
  meetingId: string | null;
  parent: Parent;

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
   * Operation: Get Scheduled Meetings
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting
   */
  async list(config?: RestRequestConfig): Promise<MeetingsResource> {
    const r = await this.rc.get<MeetingsResource>(
      this.path(false),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Create Meeting
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting
   */
  async post(
    meetingRequestResource: MeetingRequestResource,
    config?: RestRequestConfig
  ): Promise<MeetingResponseResource> {
    const r = await this.rc.post<MeetingResponseResource>(
      this.path(false),
      meetingRequestResource,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Meeting Info
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}
   */
  async get(config?: RestRequestConfig): Promise<MeetingResponseResource> {
    if (this.meetingId === null) {
      throw new Error('meetingId must be specified.');
    }

    const r = await this.rc.get<MeetingResponseResource>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Meeting
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}
   */
  async put(
    meetingRequestResource: MeetingRequestResource,
    config?: RestRequestConfig
  ): Promise<MeetingResponseResource> {
    if (this.meetingId === null) {
      throw new Error('meetingId must be specified.');
    }

    const r = await this.rc.put<MeetingResponseResource>(
      this.path(),
      meetingRequestResource,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Delete Meeting
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}
   */
  async delete(config?: RestRequestConfig): Promise<string> {
    if (this.meetingId === null) {
      throw new Error('meetingId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), undefined, config);
    return r.data;
  }

  serviceInfo(): ServiceInfo {
    return new ServiceInfo(this);
  }

  end(): End {
    return new End(this);
  }
}

export default Meeting;
