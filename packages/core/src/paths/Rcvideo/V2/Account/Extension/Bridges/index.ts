import Default from "./Default/index.js";
import BridgeResponse from "../../../../../../definitions/BridgeResponse.js";
import CreateBridgeRequest from "../../../../../../definitions/CreateBridgeRequest.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/bridges`;
  }
  /**
   * Creates a new bridge for the user specified by `accountId` and `extensionId` identifiers. The request body
   * should contain JSON object which describes properties of the new bridge.
   * The bridge can be created by the owner, a delegate or any user who has the **Super Admin** privilege.
   *
   * HTTP Method: post
   * Endpoint: /rcvideo/v2/account/{accountId}/extension/{extensionId}/bridges
   * Rate Limit Group: Heavy
   * App Permission: Video
   */
  public async post(
    createBridgeRequest: CreateBridgeRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<BridgeResponse> {
    const r = await this.rc.post<BridgeResponse>(
      this.path(),
      createBridgeRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public default(): Default {
    return new Default(this);
  }
}
export default Index;
