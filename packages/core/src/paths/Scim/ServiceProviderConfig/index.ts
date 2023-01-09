import ScimProviderConfig from '../../../definitions/ScimProviderConfig';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/ServiceProviderConfig`;
  }

  /**
   * Returns SCIM service provider configuration
   * HTTP Method: get
   * Endpoint: /scim/{version}/ServiceProviderConfig
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<ScimProviderConfig> {
    const r = await this.rc.get<ScimProviderConfig>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
