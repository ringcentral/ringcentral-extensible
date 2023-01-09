import DotSearch from './DotSearch';
import ScimUserPatch from '../../../definitions/ScimUserPatch';
import ScimUserResponse from '../../../definitions/ScimUserResponse';
import ScimUser from '../../../definitions/ScimUser';
import ScimUserSearchResponse from '../../../definitions/ScimUserSearchResponse';
import ScimSearchViaGet2Parameters from '../../../definitions/ScimSearchViaGet2Parameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  scimUserId: string | null;

  constructor(parent: ParentInterface, scimUserId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.scimUserId = scimUserId;
  }

  path(withParameter = true): string {
    if (withParameter && this.scimUserId !== null) {
      return `${this.parent.path()}/Users/${this.scimUserId}`;
    }
    return `${this.parent.path()}/Users`;
  }

  /**
   * Returns the list of users satisfying search criteria
   * HTTP Method: get
   * Endpoint: /scim/{version}/Users
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  async list(queryParams?: ScimSearchViaGet2Parameters, restRequestConfig?: RestRequestConfig): Promise<ScimUserSearchResponse> {
    const r = await this.rc.get<ScimUserSearchResponse>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a new user
   * HTTP Method: post
   * Endpoint: /scim/{version}/Users
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   */
  async post(scimUser: ScimUser, restRequestConfig?: RestRequestConfig): Promise<ScimUserResponse> {
    const r = await this.rc.post<ScimUserResponse>(this.path(false), scimUser, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns a user by ID
   * HTTP Method: get
   * Endpoint: /scim/{version}/Users/{scimUserId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<ScimUserResponse> {
    if (this.scimUserId === null) {
      throw new Error('scimUserId must be specified.');
    }
    const r = await this.rc.get<ScimUserResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates a user
   * HTTP Method: put
   * Endpoint: /scim/{version}/Users/{scimUserId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   */
  async put(scimUser: ScimUser, restRequestConfig?: RestRequestConfig): Promise<ScimUserResponse> {
    if (this.scimUserId === null) {
      throw new Error('scimUserId must be specified.');
    }
    const r = await this.rc.put<ScimUserResponse>(this.path(), scimUser, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes a user
   * HTTP Method: delete
   * Endpoint: /scim/{version}/Users/{scimUserId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.scimUserId === null) {
      throw new Error('scimUserId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates a user (partial update)
   * HTTP Method: patch
   * Endpoint: /scim/{version}/Users/{scimUserId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   */
  async patch(scimUserPatch: ScimUserPatch, restRequestConfig?: RestRequestConfig): Promise<ScimUserResponse> {
    if (this.scimUserId === null) {
      throw new Error('scimUserId must be specified.');
    }
    const r = await this.rc.patch<ScimUserResponse>(this.path(), scimUserPatch, undefined, restRequestConfig);
    return r.data;
  }

  dotSearch(): DotSearch {
    return new DotSearch(this);
  }
}
export default Index;
