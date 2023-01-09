import ScimResourceTypeResponse from '../../../definitions/ScimResourceTypeResponse';
import ScimResourceTypeSearchResponse from '../../../definitions/ScimResourceTypeSearchResponse';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  type: string | null;

  constructor(parent: ParentInterface, type: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.type = type;
  }

  path(withParameter = true): string {
    if (withParameter && this.type !== null) {
      return `${this.parent.path()}/ResourceTypes/${this.type}`;
    }
    return `${this.parent.path()}/ResourceTypes`;
  }

  /**
   * Returns the list of supported SCIM resource types
   * HTTP Method: get
   * Endpoint: /scim/{version}/ResourceTypes
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  async list(restRequestConfig?: RestRequestConfig): Promise<ScimResourceTypeSearchResponse> {
    const r = await this.rc.get<ScimResourceTypeSearchResponse>(this.path(false), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns resource type by ID
   * HTTP Method: get
   * Endpoint: /scim/{version}/ResourceTypes/{type}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<ScimResourceTypeResponse> {
    if (this.type === null) {
      throw new Error('type must be specified.');
    }
    const r = await this.rc.get<ScimResourceTypeResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
