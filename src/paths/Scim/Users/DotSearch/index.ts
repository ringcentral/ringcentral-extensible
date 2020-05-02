import {UserSearchResponse, SearchRequest} from '../../../../definitions';
import Parent from '..';
import RestClient from '../../../..';

class DotSearch {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/.search`;
  }

  /**
   * Operation: Search/List Users
   * Rate Limit Group: Light
   * Http post /scim/v2/Users/.search
   */
  async post(searchRequest: SearchRequest): Promise<UserSearchResponse> {
    const r = await this.rc.post<UserSearchResponse>(
      this.path(),
      searchRequest
    );
    return r.data;
  }
}

export default DotSearch;
