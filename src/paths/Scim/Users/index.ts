import DotSearch from './DotSearch';
import {
  UserSearchResponse,
  SearchViaGet2Parameters,
  UserResponse,
  CreateUser,
  User,
  UserPatch,
} from '../../../definitions';
import Parent from '..';
import RestClient from '../../..';

class Users {
  rc: RestClient;
  id: string | null;
  parent: Parent;

  constructor(parent: Parent, id: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.id = id;
  }

  path(withParameter = true): string {
    if (withParameter && this.id !== null) {
      return `${this.parent.path()}/Users/${this.id}`;
    }

    return `${this.parent.path()}/Users`;
  }

  /**
   * Operation: Search/List Users
   * Rate Limit Group: Light
   * Http get /scim/v2/Users
   */
  async list(
    queryParams?: SearchViaGet2Parameters
  ): Promise<UserSearchResponse> {
    const r = await this.rc.get(this.path(false), queryParams);
    return r.data;
  }

  /**
   * Operation: Create User
   * Rate Limit Group: Heavy
   * Http post /scim/v2/Users
   */
  async post(createUser: CreateUser): Promise<UserResponse> {
    const r = await this.rc.post(this.path(false), createUser);
    return r.data;
  }

  /**
   * Operation: Get User
   * Rate Limit Group: Light
   * Http get /scim/v2/Users/{id}
   */
  async get(): Promise<UserResponse> {
    if (this.id === null) {
      throw new Error('id must be specified.');
    }

    const r = await this.rc.get(this.path());
    return r.data;
  }

  /**
   * Operation: Update/Replace User
   * Rate Limit Group: Heavy
   * Http put /scim/v2/Users/{id}
   */
  async put(user: User): Promise<UserResponse> {
    if (this.id === null) {
      throw new Error('id must be specified.');
    }

    const r = await this.rc.put(this.path(), user);
    return r.data;
  }

  /**
   * Operation: Delete User
   * Rate Limit Group: Heavy
   * Http delete /scim/v2/Users/{id}
   */
  async delete(): Promise<string> {
    if (this.id === null) {
      throw new Error('id must be specified.');
    }

    const r = await this.rc.delete(this.path());
    return r.data;
  }

  /**
   * Operation: Update/Patch User
   * Rate Limit Group: Heavy
   * Http patch /scim/v2/Users/{id}
   */
  async patch(userPatch: UserPatch): Promise<UserResponse> {
    if (this.id === null) {
      throw new Error('id must be specified.');
    }

    const r = await this.rc.patch(this.path(), userPatch);
    return r.data;
  }

  dotSearch(): DotSearch {
    return new DotSearch(this);
  }
}

export default Users;
