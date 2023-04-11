import BridgeResponse from '../../../../../../definitions/BridgeResponse';
import GetBridgeByPstnPinParameters from '../../../../../../definitions/GetBridgeByPstnPinParameters';
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
      return `${this.parent.path()}/pstn/${this.pin}`;
    }
    return `${this.parent.path()}/pstn`;
  }

  /**
   * Finds a bridge by Host or Participant PSTN PIN.
   * HTTP Method: get
   * Endpoint: /rcvideo/v2/bridges/pin/pstn/{pin}
   * Rate Limit Group: Medium
   * App Permission: Video
   */
  async get(queryParams?: GetBridgeByPstnPinParameters, restRequestConfig?: RestRequestConfig): Promise<BridgeResponse> {
    if (this.pin === null) {
      throw new Error('pin must be specified.');
    }
    const r = await this.rc.get<BridgeResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
