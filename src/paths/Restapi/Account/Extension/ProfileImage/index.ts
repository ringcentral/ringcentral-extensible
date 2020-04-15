import UpdateUserProfileImageRequest from '../../../../../definitions/UpdateUserProfileImageRequest'
import CreateUserProfileImageRequest from '../../../../../definitions/CreateUserProfileImageRequest'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  scaleSize: string
  parent: Parent

  constructor(parent: Parent, scaleSize: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.scaleSize = scaleSize
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.scaleSize != null) {
      return `${this.parent.path()}/profile-image/${this.scaleSize}`
    }

    return `${this.parent.path()}/profile-image`
  }

  /**
   * Operation: Get User Profile Image
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image
   */
  async list(): Promise<Buffer> {
    return this.rc.get(this.path(false))
  }

  /**
   * Operation: Upload User Profile Image
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image
   */
  async post(createUserProfileImageRequest: CreateUserProfileImageRequest): Promise<string> {
    var multipartFormDataContent = Utils.GetMultipartFormDataContent(createUserProfileImageRequest)
    return this.rc.post(this.path(false), multipartFormDataContent)
  }

  /**
   * Operation: Update User Profile Image
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image
   */
  async put(updateUserProfileImageRequest: UpdateUserProfileImageRequest): Promise<string> {
    var multipartFormDataContent = Utils.GetMultipartFormDataContent(updateUserProfileImageRequest)
    return this.rc.post(this.path(false), multipartFormDataContent)
  }

  /**
   * Operation: Get Scaled User Profile Image
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image/{scaleSize}
   */
  async get(): Promise<Buffer> {
    if (!this.scaleSize || this.scaleSize === null) {
      throw new Error("scaleSize must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Index
