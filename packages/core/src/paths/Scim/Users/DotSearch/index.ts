import ScimUserSearchResponse from '../../../../definitions/ScimUserSearchResponse';
import ScimSearchRequest from '../../../../definitions/ScimSearchRequest';
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
   * Returns the list of users satisfying search criteria
   * HTTP Method: post
   * Endpoint: /scim/{version}/Users/dotSearch
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  async post(scimSearchRequest: ScimSearchRequest, restRequestConfig?: RestRequestConfig): Promise<ScimUserSearchResponse> {
    const r = await this.rc.post<ScimUserSearchResponse>(this.path(), scimSearchRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
