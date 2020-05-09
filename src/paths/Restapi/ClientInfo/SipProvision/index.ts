import {
  CreateSipRegistrationResponse,
  CreateSipRegistrationRequest,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class SipProvision {
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
   * Operation: Register SIP Device
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/client-info/sip-provision
   */
  async post(
    createSipRegistrationRequest: CreateSipRegistrationRequest
  ): Promise<CreateSipRegistrationResponse> {
    const r = await this.rc.post<CreateSipRegistrationResponse>(
      this.path(),
      createSipRegistrationRequest
    );
    return r.data;
  }
}

export default SipProvision;
