import Utils from '../../../../../../Utils';
import {RestRequestConfig} from '../../../../../../Rest';
import {CreateUserMeetingProfileImageRequest} from '../../../../../../definitions';
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
    return `${this.parent.path()}/profile-image`;
  }

  /**
   * Uploads profile picture for user meetings.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting-configuration/profile-image
   * Rate Limit Group: Light
   */
  async post(
    createUserMeetingProfileImageRequest: CreateUserMeetingProfileImageRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<string> {
    const formData = Utils.getFormData(createUserMeetingProfileImageRequest);
    const r = await this.rc.post<string>(
      this.path(),
      formData,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}

export default Index;
