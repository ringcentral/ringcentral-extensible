import {RestRequestConfig} from '../../../../Rest';
import {
  CreateSipRegistrationResponse,
  CreateSipRegistrationRequest,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

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
   * Operation: Register SIP Device
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/client-info/sip-provision
   */
  async post(
    createSipRegistrationRequest: CreateSipRegistrationRequest,
    config?: RestRequestConfig
  ): Promise<CreateSipRegistrationResponse> {
    const r = await this.rc.post<CreateSipRegistrationResponse>(
      this.path(),
      createSipRegistrationRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
