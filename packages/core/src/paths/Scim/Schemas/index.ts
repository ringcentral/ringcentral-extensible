import type ScimSchemaResponse from '../../../definitions/ScimSchemaResponse';
import type ScimSchemaSearchResponse from '../../../definitions/ScimSchemaSearchResponse';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public uri: string | null;

  public constructor(_parent: ParentInterface, uri: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.uri = uri;
  }

  public path(withParameter = true): string {
    if (withParameter && this.uri !== null) {
      return `${this._parent.path()}/Schemas/${this.uri}`;
    }
    return `${this._parent.path()}/Schemas`;
  }

  /**
   * Returns the list of schemas
   * HTTP Method: get
   * Endpoint: /scim/{version}/Schemas
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  public async list(restRequestConfig?: RestRequestConfig): Promise<ScimSchemaSearchResponse> {
    const r = await this.rc.get<ScimSchemaSearchResponse>(this.path(false), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns SCIM schema
   * HTTP Method: get
   * Endpoint: /scim/{version}/Schemas/{uri}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<ScimSchemaResponse> {
    if (this.uri === null) {
      throw new Error('uri must be specified.');
    }
    const r = await this.rc.get<ScimSchemaResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
