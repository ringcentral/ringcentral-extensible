import {RestRequestConfig} from '../../../../../../Rest';
import {CreateUserMeetingProfileImageRequest} from '../../../../../../definitions';
import Utils from '../../../../../../Utils';
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
   * Operation: Upload User Meeting Profile Image
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting-configuration/profile-image
   */
  async post(
    createUserMeetingProfileImageRequest: CreateUserMeetingProfileImageRequest,
    config?: RestRequestConfig
  ): Promise<string> {
    const formData = Utils.getFormData(createUserMeetingProfileImageRequest);
    const r = await this.rc.post<string>(
      this.path(),
      formData,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
