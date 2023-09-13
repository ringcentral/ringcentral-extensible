import ScimProviderConfig from '../../../definitions/ScimProviderConfig';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/ServiceProviderConfig`;
  }

  /**
   * Returns SCIM service provider configuration
   * HTTP Method: get
   * Endpoint: /scim/{version}/ServiceProviderConfig
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<ScimProviderConfig> {
    const r = await this.rc.get<ScimProviderConfig>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
