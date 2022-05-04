import { RestRequestConfig } from '../../../../Rest';
import { SearchRequest, UserSearchResponse } from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/.search`;
  }

  /**
   * Search/List Users
   * HTTP Method: post
   * Endpoint: /scim/{version}/Users/dotSearch
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  async post(searchRequest: SearchRequest, restRequestConfig?: RestRequestConfig): Promise<UserSearchResponse> {
    const r = await this.rc.post<UserSearchResponse>(this.path(), searchRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
