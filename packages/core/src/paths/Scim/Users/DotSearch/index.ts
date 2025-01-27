import ScimUserSearchResponse from "../../../../definitions/ScimUserSearchResponse.js";
import ScimSearchRequest from "../../../../definitions/ScimSearchRequest.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/.search`;
  }
  /**
   * Returns the list of users satisfying search criteria
   * HTTP Method: post
   * Endpoint: /scim/{version}/Users/dotSearch
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  public async post(
    scimSearchRequest: ScimSearchRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ScimUserSearchResponse> {
    const r = await this.rc.post<ScimUserSearchResponse>(
      this.path(),
      scimSearchRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
