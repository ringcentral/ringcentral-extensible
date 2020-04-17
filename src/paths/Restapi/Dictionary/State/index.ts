import { GetStateListResponse, ListStatesParameters, GetStateInfoResponse } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class State {
  rc: RestClient
  stateId: string
  parent: Parent

  constructor(parent: Parent, stateId: string) {
    this.parent = parent
    this.rc = parent.rc
    this.stateId = stateId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.stateId) {
      return `${this.parent.path()}/state/${this.stateId}`
    }

    return `${this.parent.path()}/state`
  }

  /**
   * Operation: Get States List
   * Http get /restapi/v1.0/dictionary/state
   */
  async list(queryParams?: ListStatesParameters): Promise<GetStateListResponse> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get State
   * Http get /restapi/v1.0/dictionary/state/{stateId}
   */
  async get(): Promise<GetStateInfoResponse> {
    if (!this.stateId) {
      throw new Error('stateId must not be undefined')
    }

    return this.rc.get(this.path())
  }
}

export default State
