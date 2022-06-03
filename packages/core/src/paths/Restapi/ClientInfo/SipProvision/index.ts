import CreateSipRegistrationResponse from '../../../../definitions/CreateSipRegistrationResponse';
import CreateSipRegistrationRequest from '../../../../definitions/CreateSipRegistrationRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/sip-provision`;
  }

  /**
   * Creates SIP registration of a device/application (WebPhone, Mobile, softphone).
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/client-info/sip-provision
   * Rate Limit Group: Heavy
   * App Permission: VoipCalling
   */
  async post(createSipRegistrationRequest: CreateSipRegistrationRequest, restRequestConfig?: RestRequestConfig): Promise<CreateSipRegistrationResponse> {
    const r = await this.rc.post<CreateSipRegistrationResponse>(this.path(), createSipRegistrationRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
