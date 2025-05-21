import WsTokenResponse from "../../../../definitions/WsTokenResponse.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/wstoken`;
  }
  /**
   * Returns a special short lived token to authorize a dedicated web socket connection between this client
   * and a backend.
   *
   * This API needs to be called if a client plans to use "Websocket" transport to receive
   * RingCentral push notifications. The token returned by this API should be provided when establishing
   * a connection to the RingCentral Websocket Gateway.
   *
   * HTTP Method: post
   * Endpoint: /restapi/oauth/wstoken
   * Rate Limit Group: Auth
   * App Permission: WebSocket
   */
  public async post(
    restRequestConfig?: RestRequestConfig,
  ): Promise<WsTokenResponse> {
    const r = await this.rc.post<WsTokenResponse>(
      this.path(),
      {},
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
