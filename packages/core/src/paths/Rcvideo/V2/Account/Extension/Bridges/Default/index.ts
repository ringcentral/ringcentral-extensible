import BridgeResponse from '../../../../../../../definitions/BridgeResponse';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/default`;
  }

  /**
   * Returns a default bridge (PMI) for the user specified by **accountId**
 * and **extensionId** identifiers.
 *
   * HTTP Method: get
   * Endpoint: /rcvideo/v2/account/{accountId}/extension/{extensionId}/bridges/default
   * Rate Limit Group: Medium
   * App Permission: Video
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<BridgeResponse> {
    const r = await this.rc.get<BridgeResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
