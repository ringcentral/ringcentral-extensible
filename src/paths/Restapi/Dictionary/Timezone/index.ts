import { GetTimezoneListResponse, ListTimezonesParameters, GetTimezoneInfoResponse, ReadTimezoneParameters } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Timezone {
  rc: RestClient
  timezoneId: string
  parent: Parent

  constructor(parent: Parent, timezoneId: string) {
    this.parent = parent
    this.rc = parent.rc
    this.timezoneId = timezoneId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.timezoneId) {
      return `${this.parent.path()}/timezone/${this.timezoneId}`
    }

    return `${this.parent.path()}/timezone`
  }

  /**
   * Operation: Get Timezone List
   * Http get /restapi/v1.0/dictionary/timezone
   */
  async list(queryParams?: ListTimezonesParameters): Promise<GetTimezoneListResponse> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get Timezone
   * Http get /restapi/v1.0/dictionary/timezone/{timezoneId}
   */
  async get(queryParams?: ReadTimezoneParameters): Promise<GetTimezoneInfoResponse> {
    if (!this.timezoneId) {
      throw new Error('timezoneId must not be undefined')
    }

    return this.rc.get(this.path(), queryParams)
  }
}

export default Timezone
