import BridgeResponse from "../../../../../../definitions/BridgeResponse.js";
import GetBridgeByPstnPinParameters from "../../../../../../definitions/GetBridgeByPstnPinParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../types.js";

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
      return `${this._parent.path()}/pstn/${this.pin}`;
    }
    return `${this._parent.path()}/pstn`;
  }
  /**
   * Finds a bridge by Host or Participant PSTN PIN.
   * HTTP Method: get
   * Endpoint: /rcvideo/v2/bridges/pin/pstn/{pin}
   * Rate Limit Group: Medium
   * App Permission: Video
   */
  public async get(
    queryParams?: GetBridgeByPstnPinParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<BridgeResponse> {
    if (this.pin === null) {
      throw new Error("pin must be specified.");
    }
    const r = await this.rc.get<BridgeResponse>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
