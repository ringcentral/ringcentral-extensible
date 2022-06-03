import DotSearch from './DotSearch';
import UserPatch from '../../../definitions/UserPatch';
import User from '../../../definitions/User';
import UserResponse from '../../../definitions/UserResponse';
import CreateUser from '../../../definitions/CreateUser';
import UserSearchResponse from '../../../definitions/UserSearchResponse';
import SearchViaGet2Parameters from '../../../definitions/SearchViaGet2Parameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  id: string | null;

  constructor(parent: ParentInterface, id: string | null = null) {
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
   * Search/List Users
   * HTTP Method: get
   * Endpoint: /scim/{version}/Users
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  async list(queryParams?: SearchViaGet2Parameters, restRequestConfig?: RestRequestConfig): Promise<UserSearchResponse> {
    const r = await this.rc.get<UserSearchResponse>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Create User
   * HTTP Method: post
   * Endpoint: /scim/{version}/Users
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   */
  async post(createUser: CreateUser, restRequestConfig?: RestRequestConfig): Promise<UserResponse> {
    const r = await this.rc.post<UserResponse>(this.path(false), createUser, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Get User
   * HTTP Method: get
   * Endpoint: /scim/{version}/Users/{id}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<UserResponse> {
    if (this.id === null) {
      throw new Error('id must be specified.');
    }
    const r = await this.rc.get<UserResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Update/Replace User
   * HTTP Method: put
   * Endpoint: /scim/{version}/Users/{id}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   */
  async put(user: User, restRequestConfig?: RestRequestConfig): Promise<UserResponse> {
    if (this.id === null) {
      throw new Error('id must be specified.');
    }
    const r = await this.rc.put<UserResponse>(this.path(), user, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Delete User
   * HTTP Method: delete
   * Endpoint: /scim/{version}/Users/{id}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.id === null) {
      throw new Error('id must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Update/Patch User
   * HTTP Method: patch
   * Endpoint: /scim/{version}/Users/{id}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   */
  async patch(userPatch: UserPatch, restRequestConfig?: RestRequestConfig): Promise<UserResponse> {
    if (this.id === null) {
      throw new Error('id must be specified.');
    }
    const r = await this.rc.patch<UserResponse>(this.path(), userPatch, undefined, restRequestConfig);
    return r.data;
  }

  dotSearch(): DotSearch {
    return new DotSearch(this);
  }
}
export default Index;
