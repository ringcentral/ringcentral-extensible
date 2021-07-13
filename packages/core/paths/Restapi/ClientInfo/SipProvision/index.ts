import {RestRequestConfig} from '../../../../Rest';
import {
  CreateSipRegistrationRequest,
  CreateSipRegistrationResponse,
} from '../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
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
  async post(
    createSipRegistrationRequest: CreateSipRegistrationRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<CreateSipRegistrationResponse> {
    const r = await this.rc.post<CreateSipRegistrationResponse>(
      this.path(),
      createSipRegistrationRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
