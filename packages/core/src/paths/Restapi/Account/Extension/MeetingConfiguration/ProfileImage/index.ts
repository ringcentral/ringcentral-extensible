import Utils from '../../../../../../Utils';
import CreateUserMeetingProfileImageRequest from '../../../../../../definitions/CreateUserMeetingProfileImageRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/profile-image`;
  }

  /**
   * Uploads profile picture for user meetings
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting-configuration/profile-image
   * Rate Limit Group: Light
   * App Permission: Meetings
   * User Permission: Meetings
   */
  async post(createUserMeetingProfileImageRequest: CreateUserMeetingProfileImageRequest, restRequestConfig?: RestRequestConfig): Promise<string> {
    const formData = await Utils.getFormData(createUserMeetingProfileImageRequest);
    const r = await this.rc.post<string>(this.path(), formData, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
