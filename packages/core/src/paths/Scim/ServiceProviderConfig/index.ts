import ServiceProviderConfig from '../../../definitions/ServiceProviderConfig';
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
   * Get Service Provider Config
   * HTTP Method: get
   * Endpoint: /scim/{version}/ServiceProviderConfig
   * Rate Limit Group: NoThrottling
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<ServiceProviderConfig> {
    const r = await this.rc.get<ServiceProviderConfig>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
