import {RestRequestConfig} from '../../../../Rest';
import {UserSearchResponse, SearchRequest} from '../../../../definitions';
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
   * Operation: Search/List Users
   * Rate Limit Group: Light
   * Http post /scim/v2/Users/.search
   */
  async post(
    searchRequest: SearchRequest,
    config?: RestRequestConfig
  ): Promise<UserSearchResponse> {
    const r = await this.rc.post<UserSearchResponse>(
      this.path(),
      searchRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
