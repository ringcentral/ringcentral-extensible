import BridgeResponse from '../../../../../../definitions/BridgeResponse';
import GetBridgeByWebPinParameters from '../../../../../../definitions/GetBridgeByWebPinParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  pin: string | null;

  constructor(parent: ParentInterface, pin: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.pin = pin;
  }

  path(withParameter = true): string {
    if (withParameter && this.pin !== null) {
      return `${this.parent.path()}/web/${this.pin}`;
    }
    return `${this.parent.path()}/web`;
  }

  /**
   * Finds a bridge by short identifier (Web PIN). Also it can be used to find a default bridge by the alias
 * (personal meeting name).
 *
   * HTTP Method: get
   * Endpoint: /rcvideo/v2/bridges/pin/web/{pin}
   * Rate Limit Group: Medium
   * App Permission: Video
   */
  async get(queryParams?: GetBridgeByWebPinParameters, restRequestConfig?: RestRequestConfig): Promise<BridgeResponse> {
    if (this.pin === null) {
      throw new Error('pin must be specified.');
    }
    const r = await this.rc.get<BridgeResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
