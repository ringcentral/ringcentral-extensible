import MeetingServiceInfoRequest from '../../../../../../definitions/MeetingServiceInfoRequest';
import MeetingServiceInfoResource from '../../../../../../definitions/MeetingServiceInfoResource';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/service-info`;
  }

  /**
   * Returns information on dial-in numbers for meetings, support and international dial-in numbers URIs and meeting account information.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting/service-info
   * Rate Limit Group: Light
   * App Permission: Meetings
   * User Permission: Meetings
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<MeetingServiceInfoResource> {
    const r = await this.rc.get<MeetingServiceInfoResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates personal meeting identifier.
   * HTTP Method: patch
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting/service-info
   * Rate Limit Group: Medium
   * App Permission: Meetings
   * User Permission: Meetings
   */
  async patch(meetingServiceInfoRequest: MeetingServiceInfoRequest, restRequestConfig?: RestRequestConfig): Promise<MeetingServiceInfoResource> {
    const r = await this.rc.patch<MeetingServiceInfoResource>(this.path(), meetingServiceInfoRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
