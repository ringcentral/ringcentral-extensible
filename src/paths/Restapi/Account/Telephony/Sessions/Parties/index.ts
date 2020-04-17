import Supervise from './Supervise'
import Recordings from './Recordings'
import Park from './Park'
import Flip from './Flip'
import Reply from './Reply'
import Forward from './Forward'
import Pickup from './Pickup'
import Answer from './Answer'
import Transfer from './Transfer'
import Ignore from './Ignore'
import Reject from './Reject'
import Unhold from './Unhold'
import Hold from './Hold'
import { CallParty, PartyUpdateRequest } from '../../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../../..'

class Parties {
  rc: RestClient
  partyId: string
  parent: Parent

  constructor(parent: Parent, partyId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.partyId = partyId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.partyId !== null) {
      return `${this.parent.path()}/parties/${this.partyId}`
    }

    return `${this.parent.path()}/parties`
  }

  /**
   * Operation: Get Call Party Status
   * Http get /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}
   */
  async get(): Promise<CallParty> {
    if (this.partyId === undefined || this.partyId === null) {
      throw new Error("partyId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Call Party
   * Http patch /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}
   */
  async patch(partyUpdateRequest: PartyUpdateRequest): Promise<CallParty> {
    if (this.partyId === undefined || this.partyId === null) {
      throw new Error("partyId must not be undefined or null")
    }

    return this.rc.patch(this.path(), partyUpdateRequest)
  }

  hold(): Hold {
    return new Hold(this)
  }

  unhold(): Unhold {
    return new Unhold(this)
  }

  reject(): Reject {
    return new Reject(this)
  }

  ignore(): Ignore {
    return new Ignore(this)
  }

  transfer(): Transfer {
    return new Transfer(this)
  }

  answer(): Answer {
    return new Answer(this)
  }

  pickup(): Pickup {
    return new Pickup(this)
  }

  forward(): Forward {
    return new Forward(this)
  }

  reply(): Reply {
    return new Reply(this)
  }

  flip(): Flip {
    return new Flip(this)
  }

  park(): Park {
    return new Park(this)
  }

  recordings(recordingId: string = null): Recordings {
    return new Recordings(this, recordingId)
  }

  supervise(): Supervise {
    return new Supervise(this)
  }
}

export default Parties
