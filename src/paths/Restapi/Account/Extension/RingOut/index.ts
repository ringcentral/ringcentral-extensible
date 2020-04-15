import MakeRingOutRequest from '../../../../../definitions/MakeRingOutRequest'
import GetRingOutStatusResponse from '../../../../../definitions/GetRingOutStatusResponse'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  ringoutId: string
  parent: Parent

  constructor(parent: Parent, ringoutId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.ringoutId = ringoutId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.ringoutId !== null) {
      return `${this.parent.path()}/ring-out/${this.ringoutId}`
    }

    return `${this.parent.path()}/ring-out`
  }

  /**
   * Operation: Make RingOut Call
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out
   */
  async post(makeRingOutRequest: MakeRingOutRequest): Promise<GetRingOutStatusResponse> {
    return this.rc.post(this.path(false), makeRingOutRequest)
  }

  /**
   * Operation: Get RingOut Call Status
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}
   */
  async get(): Promise<GetRingOutStatusResponse> {
    if (this.ringoutId === undefined || this.ringoutId === null) {
      throw new Error("ringoutId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Cancel RingOut Call
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}
   */
  async delete(): Promise<string> {
    if (this.ringoutId === undefined || this.ringoutId === null) {
      throw new Error("ringoutId must not be undefined or null")
    }

    return this.rc.delete(this.path())
  }
}

export default Index
