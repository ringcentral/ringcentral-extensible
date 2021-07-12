import Utils from '../../../../../Utils';
import {RestRequestConfig} from '../../../../../Rest';
import {
  CreateUserProfileImageRequest,
  UpdateUserProfileImageRequest,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  scaleSize: string | null;

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
   * Returns a profile image of an extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/profile-image
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  async list(restRequestConfig?: RestRequestConfig): Promise<Buffer> {
    const r = await this.rc.get<Buffer>(this.path(false), undefined, {
      ...restRequestConfig,
      responseType: 'arraybuffer',
    });
    return r.data;
  }

  /**
   * Uploads the extension profile image.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/profile-image
   * Rate Limit Group: Heavy
   * App Permission: EditExtensions
   * User Permission: EditUserInfo
   */
  async post(
    createUserProfileImageRequest: CreateUserProfileImageRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<string> {
    const formData = Utils.getFormData(createUserProfileImageRequest);
    const r = await this.rc.post<string>(
      this.path(false),
      formData,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates the extension profile image
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/profile-image
   * Rate Limit Group: Heavy
   * App Permission: EditExtensions
   * User Permission: EditUserInfo
   */
  async put(
    updateUserProfileImageRequest: UpdateUserProfileImageRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<string> {
    const formData = Utils.getFormData(updateUserProfileImageRequest);
    const r = await this.rc.put<string>(
      this.path(false),
      formData,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Returns scaled profile image of an extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/profile-image/{scaleSize}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<Buffer> {
    if (this.scaleSize === null) {
      throw new Error('scaleSize must be specified.');
    }
    const r = await this.rc.get<Buffer>(this.path(), undefined, {
      ...restRequestConfig,
      responseType: 'arraybuffer',
    });
    return r.data;
  }
}
export default Index;
