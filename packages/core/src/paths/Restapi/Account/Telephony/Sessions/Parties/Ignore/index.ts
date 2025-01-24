import type IgnoreRequestBody from "../../../../../../../definitions/IgnoreRequestBody";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/ignore`;
  }
  /**
   * Ignores a call to a call queue agent in `Setup` or `Proceeding` state.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/ignore
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  public async post(
    ignoreRequestBody: IgnoreRequestBody,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      ignoreRequestBody,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
