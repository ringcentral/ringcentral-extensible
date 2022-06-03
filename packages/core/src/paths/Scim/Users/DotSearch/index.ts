import UserSearchResponse from '../../../../definitions/UserSearchResponse';
import SearchRequest from '../../../../definitions/SearchRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
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
