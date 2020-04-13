import UserPatch from '../../../definitions/UserPatch'
import User from '../../../definitions/User'
import CreateUser from '../../../definitions/CreateUser'
import UserResponse from '../../../definitions/UserResponse'
import UserSearchResponse from '../../../definitions/UserSearchResponse'
import Parent from '..'
import RestClient from '../../..'

class Index {
  rc: RestClient
  id: string
  parent: Parent

  constructor(parent: Parent, id: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.id = id
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.id != null) {
      return `${this.parent.path()}/Users/${this.id}`
    }

    return `${this.parent.path()}/Users`
  }

  /**
   * Operation: Search/List Users
   * Http get /scim/v2/Users
   */
  async list(SearchViaGet2Parameters queryParams = null): Promise<UserSearchResponse> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Create User
   * Http post /scim/v2/Users
   */
  async post(CreateUser createUser): Promise<UserResponse> {
    return this.rc.post(this.path(false), createUser)
  }

  /**
   * Operation: Get User
   * Http get /scim/v2/Users/{id}
   */
  async get(): Promise<UserResponse> {
    if (!this.id || this.id === null) {
      throw new Error("id must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update/Replace User
   * Http put /scim/v2/Users/{id}
   */
  async put(User user): Promise<UserResponse> {
    if (!this.id || this.id === null) {
      throw new Error("id must not be undefined or null")
    }

    return this.rc.put(this.path(), user)
  }

  /**
   * Operation: Delete User
   * Http delete /scim/v2/Users/{id}
   */
  async delete(): Promise<string> {
    if (!this.id || this.id === null) {
      throw new Error("id must not be undefined or null")
    }

    return this.rc.delete(this.path())
  }

  /**
   * Operation: Update/Patch User
   * Http patch /scim/v2/Users/{id}
   */
  async patch(UserPatch userPatch): Promise<UserResponse> {
    if (!this.id || this.id === null) {
      throw new Error("id must not be undefined or null")
    }

    return this.rc.patch(this.path(), userPatch)
  }
}

export default Index
