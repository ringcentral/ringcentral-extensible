import {RestRequestConfig} from '../../../Rest';
import {ServiceProviderConfig} from '../../../definitions';
import Parent from '..';
import {RingCentral} from '../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
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
  async get(
    restRequestConfig?: RestRequestConfig
  ): Promise<ServiceProviderConfig> {
    const r = await this.rc.get<ServiceProviderConfig>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
