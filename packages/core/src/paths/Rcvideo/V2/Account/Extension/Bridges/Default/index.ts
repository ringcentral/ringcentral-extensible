import BridgeResponse from "../../../../../../../definitions/BridgeResponse.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/default`;
  }
  /**
   * Returns a default bridge (PMI) for the user specified by `accountId`
   * and `extensionId` identifiers.
   *
   * HTTP Method: get
   * Endpoint: /rcvideo/v2/account/{accountId}/extension/{extensionId}/bridges/default
   * Rate Limit Group: Medium
   * App Permission: Video
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<BridgeResponse> {
    const r = await this.rc.get<BridgeResponse>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
