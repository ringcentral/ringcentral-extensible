import BridgeResponse from '../../../../../../definitions/BridgeResponse';
import GetBridgeByWebPinParameters from '../../../../../../definitions/GetBridgeByWebPinParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public pin: string | null;

  public constructor(_parent: ParentInterface, pin: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.pin = pin;
  }

  public path(withParameter = true): string {
    if (withParameter && this.pin !== null) {
      return `${this._parent.path()}/web/${this.pin}`;
    }
    return `${this._parent.path()}/web`;
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
  public async get(queryParams?: GetBridgeByWebPinParameters, restRequestConfig?: RestRequestConfig): Promise<BridgeResponse> {
    if (this.pin === null) {
      throw new Error('pin must be specified.');
    }
    const r = await this.rc.get<BridgeResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
