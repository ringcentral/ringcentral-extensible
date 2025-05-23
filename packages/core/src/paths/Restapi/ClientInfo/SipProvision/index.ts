import CreateSipRegistrationResponse from "../../../../definitions/CreateSipRegistrationResponse.js";
import CreateSipRegistrationRequest from "../../../../definitions/CreateSipRegistrationRequest.js";
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
    return `${this._parent.path()}/sip-provision`;
  }
  /**
   * Creates SIP registration of a device/application (WebPhone, Mobile, Softphone).
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/client-info/sip-provision
   * Rate Limit Group: Heavy
   * App Permission: VoipCalling
   */
  public async post(
    createSipRegistrationRequest: CreateSipRegistrationRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CreateSipRegistrationResponse> {
    const r = await this.rc.post<CreateSipRegistrationResponse>(
      this.path(),
      createSipRegistrationRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
