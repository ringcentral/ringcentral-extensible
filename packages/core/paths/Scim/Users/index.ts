import DotSearch from './DotSearch';
import {RestRequestConfig} from '../../../Rest';
import {
  UserSearchResponse,
  SearchViaGet2Parameters,
  UserResponse,
  CreateUser,
  User,
  UserPatch,
} from '../../../definitions';
import Parent from '..';
import RingCentral from '../../..';

class Index {
  rc: RingCentral;
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
    queryParams?: SearchViaGet2Parameters,
    config?: RestRequestConfig
  ): Promise<UserSearchResponse> {
    const r = await this.rc.get<UserSearchResponse>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Create User
   * Rate Limit Group: Heavy
   * Http post /scim/v2/Users
   */
  async post(
    createUser: CreateUser,
    config?: RestRequestConfig
  ): Promise<UserResponse> {
    const r = await this.rc.post<UserResponse>(
      this.path(false),
      createUser,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get User
   * Rate Limit Group: Light
   * Http get /scim/v2/Users/{id}
   */
  async get(config?: RestRequestConfig): Promise<UserResponse> {
    if (this.id === null) {
      throw new Error('id must be specified.');
    }

    const r = await this.rc.get<UserResponse>(this.path(), undefined, config);
    return r.data;
  }

  /**
   * Operation: Update/Replace User
   * Rate Limit Group: Heavy
   * Http put /scim/v2/Users/{id}
   */
  async put(user: User, config?: RestRequestConfig): Promise<UserResponse> {
    if (this.id === null) {
      throw new Error('id must be specified.');
    }

    const r = await this.rc.put<UserResponse>(
      this.path(),
      user,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Delete User
   * Rate Limit Group: Heavy
   * Http delete /scim/v2/Users/{id}
   */
  async delete(config?: RestRequestConfig): Promise<string> {
    if (this.id === null) {
      throw new Error('id must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), undefined, config);
    return r.data;
  }

  /**
   * Operation: Update/Patch User
   * Rate Limit Group: Heavy
   * Http patch /scim/v2/Users/{id}
   */
  async patch(
    userPatch: UserPatch,
    config?: RestRequestConfig
  ): Promise<UserResponse> {
    if (this.id === null) {
      throw new Error('id must be specified.');
    }

    const r = await this.rc.patch<UserResponse>(
      this.path(),
      userPatch,
      undefined,
      config
    );
    return r.data;
  }

  dotSearch(): DotSearch {
    return new DotSearch(this);
  }
}

export default Index;
