import { CreateSipRegistrationResponse, CreateSipRegistrationRequest } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class SipProvision {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/sip-provision`
  }

  /**
   * Operation: Register SIP Device
   * Http post /restapi/v1.0/client-info/sip-provision
   */
  async post(createSipRegistrationRequest: CreateSipRegistrationRequest): Promise<CreateSipRegistrationResponse> {
    return this.rc.post(this.path(), createSipRegistrationRequest)
  }
}

export default SipProvision
