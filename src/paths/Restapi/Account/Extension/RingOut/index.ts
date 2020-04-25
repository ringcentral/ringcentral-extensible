import { GetRingOutStatusResponse, MakeRingOutRequest } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class RingOut {
  rc: RestClient
  ringoutId: (string | null)
  parent: Parent

  constructor (parent: Parent, ringoutId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.ringoutId = ringoutId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.ringoutId !== null) {
      return `${this.parent.path()}/ring-out/${this.ringoutId}`
    }

    return `${this.parent.path()}/ring-out`
  }

  /**
   * Operation: Make RingOut Call
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out
   */
  async post (makeRingOutRequest: MakeRingOutRequest): Promise<GetRingOutStatusResponse> {
    return this.rc.post(this.path(false), makeRingOutRequest)
  }

  /**
   * Operation: Get RingOut Call Status
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}
   */
  async get (): Promise<GetRingOutStatusResponse> {
    if (this.ringoutId === null) {
      throw new Error('ringoutId must be specified.')
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Cancel RingOut Call
   * Rate Limit Group: Heavy
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}
   */
  async delete (): Promise<string> {
    if (this.ringoutId === null) {
      throw new Error('ringoutId must be specified.')
    }

    return this.rc.delete(this.path())
  }
}

export default RingOut
