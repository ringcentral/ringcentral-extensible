import Sessions from './Sessions'
import CallOut from './CallOut'
import Parent from '..'
import RestClient from '../../../..'

class Telephony {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/telephony`
  }

  callOut (): CallOut {
    return new CallOut(this)
  }

  sessions (telephonySessionId: (string | null) = null): Sessions {
    return new Sessions(this, telephonySessionId)
  }
}

export default Telephony
