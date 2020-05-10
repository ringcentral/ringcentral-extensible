import {RestRequestConfig} from '../../../../../../Rest';
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
  async get(config?: RestRequestConfig): Promise<MeetingServiceInfoResource> {
    const r = await this.rc.get<MeetingServiceInfoResource>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Meeting Service Info
   * Rate Limit Group: Medium
   * Http patch /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/service-info
   */
  async patch(
    meetingServiceInfoRequest: MeetingServiceInfoRequest,
    config?: RestRequestConfig
  ): Promise<MeetingServiceInfoResource> {
    const r = await this.rc.patch<MeetingServiceInfoResource>(
      this.path(),
      meetingServiceInfoRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default ServiceInfo;
