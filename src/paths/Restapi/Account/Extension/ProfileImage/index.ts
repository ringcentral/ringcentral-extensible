import {
  CreateUserProfileImageRequest,
  UpdateUserProfileImageRequest,
} from '../../../../../definitions';
import Utils from '../../../../../Utils';
import Parent from '..';
import RestClient from '../../../../..';

class ProfileImage {
  rc: RestClient;
  scaleSize: string | null;
  parent: Parent;

  constructor(parent: Parent, scaleSize: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.scaleSize = scaleSize;
  }

  path(withParameter = true): string {
    if (withParameter && this.scaleSize !== null) {
      return `${this.parent.path()}/profile-image/${this.scaleSize}`;
    }

    return `${this.parent.path()}/profile-image`;
  }

  /**
   * Operation: Get User Profile Image
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image
   */
  async list(): Promise<Buffer> {
    const r = await this.rc.get(this.path(false), undefined, {
      responseType: 'arraybuffer',
    });
    return r.data;
  }

  /**
   * Operation: Upload User Profile Image
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image
   */
  async post(
    createUserProfileImageRequest: CreateUserProfileImageRequest
  ): Promise<string> {
    const formData = Utils.getFormData(createUserProfileImageRequest);
    const r = await this.rc.post(this.path(false), formData, undefined, {
      headers: formData.getHeaders(),
    });
    return r.data;
  }

  /**
   * Operation: Update User Profile Image
   * Rate Limit Group: Heavy
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image
   */
  async put(
    updateUserProfileImageRequest: UpdateUserProfileImageRequest
  ): Promise<string> {
    const formData = Utils.getFormData(updateUserProfileImageRequest);
    const r = await this.rc.put(this.path(false), formData, undefined, {
      headers: formData.getHeaders(),
    });
    return r.data;
  }

  /**
   * Operation: Get Scaled User Profile Image
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image/{scaleSize}
   */
  async get(): Promise<Buffer> {
    if (this.scaleSize === null) {
      throw new Error('scaleSize must be specified.');
    }

    const r = await this.rc.get(this.path(), undefined, {
      responseType: 'arraybuffer',
    });
    return r.data;
  }
}

export default ProfileImage;
