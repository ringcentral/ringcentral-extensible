import DotSearch from './DotSearch';
import type ScimUserPatch from '../../../definitions/ScimUserPatch';
import type ScimUserResponse from '../../../definitions/ScimUserResponse';
import type ScimUser from '../../../definitions/ScimUser';
import type ScimUserSearchResponse from '../../../definitions/ScimUserSearchResponse';
import type ScimSearchViaGet2Parameters from '../../../definitions/ScimSearchViaGet2Parameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public scimUserId: string | null;

  public constructor(_parent: ParentInterface, scimUserId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.scimUserId = scimUserId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.scimUserId !== null) {
      return `${this._parent.path()}/Users/${this.scimUserId}`;
    }
    return `${this._parent.path()}/Users`;
  }
  /**
   * Returns the list of users satisfying search criteria
   * HTTP Method: get
   * Endpoint: /scim/{version}/Users
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  public async list(
    queryParams?: ScimSearchViaGet2Parameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ScimUserSearchResponse> {
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
  public async post(scimUser: ScimUser, restRequestConfig?: RestRequestConfig): Promise<ScimUserResponse> {
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
  public async get(restRequestConfig?: RestRequestConfig): Promise<ScimUserResponse> {
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
  public async put(scimUser: ScimUser, restRequestConfig?: RestRequestConfig): Promise<ScimUserResponse> {
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
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.scimUserId === null) {
      throw new Error('scimUserId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates a user (partial update)
   * HTTP Method: patch
   * Endpoint: /scim/{version}/Users/{scimUserId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   */
  public async patch(scimUserPatch: ScimUserPatch, restRequestConfig?: RestRequestConfig): Promise<ScimUserResponse> {
    if (this.scimUserId === null) {
      throw new Error('scimUserId must be specified.');
    }
    const r = await this.rc.patch<ScimUserResponse>(this.path(), scimUserPatch, undefined, restRequestConfig);
    return r.data;
  }

  public dotSearch(): DotSearch {
    return new DotSearch(this);
  }
}
export default Index;
