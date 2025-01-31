import ScimResourceTypeResponse from "../../../definitions/ScimResourceTypeResponse.js";
import ScimResourceTypeSearchResponse from "../../../definitions/ScimResourceTypeSearchResponse.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public type: string | null;

  public constructor(_parent: ParentInterface, type: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.type = type;
  }
  public path(withParameter = true): string {
    if (withParameter && this.type !== null) {
      return `${this._parent.path()}/ResourceTypes/${this.type}`;
    }
    return `${this._parent.path()}/ResourceTypes`;
  }
  /**
   * Returns the list of supported SCIM resource types
   * HTTP Method: get
   * Endpoint: /scim/{version}/ResourceTypes
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  public async list(
    restRequestConfig?: RestRequestConfig,
  ): Promise<ScimResourceTypeSearchResponse> {
    const r = await this.rc.get<ScimResourceTypeSearchResponse>(
      this.path(false),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns resource type by ID
   * HTTP Method: get
   * Endpoint: /scim/{version}/ResourceTypes/{type}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<ScimResourceTypeResponse> {
    if (this.type === null) {
      throw new Error("type must be specified.");
    }
    const r = await this.rc.get<ScimResourceTypeResponse>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
