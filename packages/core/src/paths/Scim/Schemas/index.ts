import ScimSchemaResponse from '../../../definitions/ScimSchemaResponse';
import ScimSchemaSearchResponse from '../../../definitions/ScimSchemaSearchResponse';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  uri: string | null;

  constructor(parent: ParentInterface, uri: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.uri = uri;
  }

  path(withParameter = true): string {
    if (withParameter && this.uri !== null) {
      return `${this.parent.path()}/Schemas/${this.uri}`;
    }
    return `${this.parent.path()}/Schemas`;
  }

  /**
   * Returns the list of schemas
   * HTTP Method: get
   * Endpoint: /scim/{version}/Schemas
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  async list(restRequestConfig?: RestRequestConfig): Promise<ScimSchemaSearchResponse> {
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
  async get(restRequestConfig?: RestRequestConfig): Promise<ScimSchemaResponse> {
    if (this.uri === null) {
      throw new Error('uri must be specified.');
    }
    const r = await this.rc.get<ScimSchemaResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
