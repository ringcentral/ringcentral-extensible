import Pin from "./Pin/index.js";
import UpdateBridgeRequest from "../../../../definitions/UpdateBridgeRequest.js";
import BridgeResponse from "../../../../definitions/BridgeResponse.js";
import GetBridgeParameters from "../../../../definitions/GetBridgeParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public bridgeId: string | null;

  public constructor(_parent: ParentInterface, bridgeId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.bridgeId = bridgeId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.bridgeId !== null) {
      return `${this._parent.path()}/bridges/${this.bridgeId}`;
    }
    return `${this._parent.path()}/bridges`;
  }
  /**
   * Returns a bridge by `bridgeId` identifier.
   * HTTP Method: get
   * Endpoint: /rcvideo/v2/bridges/{bridgeId}
   * Rate Limit Group: Medium
   * App Permission: Video
   */
  public async get(
    queryParams?: GetBridgeParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<BridgeResponse> {
    if (this.bridgeId === null) {
      throw new Error("bridgeId must be specified.");
    }
    const r = await this.rc.get<BridgeResponse>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Deletes a bridge by `bridgeId` identifier.
   * Deletion can only be done by the bridge owner, an owner's delegate or any user who has the **Super Admin** privilege.
   *
   * HTTP Method: delete
   * Endpoint: /rcvideo/v2/bridges/{bridgeId}
   * Rate Limit Group: Medium
   * App Permission: Video
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.bridgeId === null) {
      throw new Error("bridgeId must be specified.");
    }
    const r = await this.rc.delete<string>(
      this.path(),
      {},
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates a bridge by `bridgeId` identifier. The request body should contain JSON object with updating properties.
   * Update can only be done by the bridge owner, an owner's delegate or any user who has the **Super Admin** privilege.
   *
   * HTTP Method: patch
   * Endpoint: /rcvideo/v2/bridges/{bridgeId}
   * Rate Limit Group: Medium
   * App Permission: Video
   */
  public async patch(
    updateBridgeRequest: UpdateBridgeRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<BridgeResponse> {
    if (this.bridgeId === null) {
      throw new Error("bridgeId must be specified.");
    }
    const r = await this.rc.patch<BridgeResponse>(
      this.path(),
      updateBridgeRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public pin(): Pin {
    return new Pin(this);
  }
}
export default Index;
