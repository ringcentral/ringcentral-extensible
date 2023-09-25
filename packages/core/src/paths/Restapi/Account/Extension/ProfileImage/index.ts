import Utils from '../../../../../Utils';
import type ReadScaledProfileImageParameters from '../../../../../definitions/ReadScaledProfileImageParameters';
import type UpdateUserProfileImageRequest from '../../../../../definitions/UpdateUserProfileImageRequest';
import type CreateUserProfileImageRequest from '../../../../../definitions/CreateUserProfileImageRequest';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public scaleSize: string | null;

  public constructor(_parent: ParentInterface, scaleSize: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.scaleSize = scaleSize;
  }

  public path(withParameter = true): string {
    if (withParameter && this.scaleSize !== null) {
      return `${this._parent.path()}/profile-image/${this.scaleSize}`;
    }
    return `${this._parent.path()}/profile-image`;
  }

  /**
   * Returns a profile image of an extension.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/profile-image
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  public async list(restRequestConfig?: RestRequestConfig): Promise<Buffer> {
    const r = await this.rc.get<Buffer>(this.path(false), undefined, {
      ...restRequestConfig,
      responseType: 'arraybuffer',
    });
    return r.data;
  }

  /**
   * Uploads the extension profile image.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/profile-image
   * Rate Limit Group: Heavy
   * App Permission: EditExtensions
   * User Permission: EditUserInfo
   */
  public async post(
    createUserProfileImageRequest: CreateUserProfileImageRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const formData = await Utils.getFormData(createUserProfileImageRequest);
    const r = await this.rc.post<string>(this.path(false), formData, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates the extension profile image.
   *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/profile-image
   * Rate Limit Group: Heavy
   * App Permission: EditExtensions
   * User Permission: EditUserInfo
   */
  public async put(
    updateUserProfileImageRequest: UpdateUserProfileImageRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const formData = await Utils.getFormData(updateUserProfileImageRequest);
    const r = await this.rc.put<string>(this.path(false), formData, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes the user profile image.
   *
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/profile-image
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: EditUserInfo
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.delete<string>(this.path(false), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns the scaled profile image of an extension.
   *
   * **This API must be called via media API entry point, e.g. https://media.ringcentral.com**
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/profile-image/{scaleSize}
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   */
  public async get(
    queryParams?: ReadScaledProfileImageParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<Buffer> {
    if (this.scaleSize === null) {
      throw new Error('scaleSize must be specified.');
    }
    const r = await this.rc.get<Buffer>(this.path(), queryParams, {
      ...restRequestConfig,
      responseType: 'arraybuffer',
    });
    return r.data;
  }
}
export default Index;
