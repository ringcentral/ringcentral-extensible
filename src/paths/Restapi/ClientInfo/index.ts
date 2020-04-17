import SipProvision from './SipProvision'
import Parent from '..'
import RestClient from '../../..'

class ClientInfo {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/client-info`
  }

  sipProvision(): SipProvision {
    return new SipProvision(this)
  }
}

export default ClientInfo
