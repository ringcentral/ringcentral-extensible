import {
  MeetingServiceInfoResource,
  MeetingServiceInfoRequest,
} from '../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../..';

class ServiceInfo {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/service-info`;
  }

  /**
   * Operation: Get Meeting Service Info
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/service-info
   */
  async get(): Promise<MeetingServiceInfoResource> {
    const r = await this.rc.get<MeetingServiceInfoResource>(this.path());
    return r.data;
  }

  /**
   * Operation: Update Meeting Service Info
   * Rate Limit Group: Medium
   * Http patch /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/service-info
   */
  async patch(
    meetingServiceInfoRequest: MeetingServiceInfoRequest
  ): Promise<MeetingServiceInfoResource> {
    const r = await this.rc.patch<MeetingServiceInfoResource>(
      this.path(),
      meetingServiceInfoRequest
    );
    return r.data;
  }
}

export default ServiceInfo;
