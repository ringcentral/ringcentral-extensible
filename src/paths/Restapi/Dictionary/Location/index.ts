import { GetLocationListResponse, ListLocationsParameters } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Location {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/location`
  }

  /**
   * Operation: Get Location List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/dictionary/location
   */
  async get (queryParams?: ListLocationsParameters): Promise<GetLocationListResponse> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Location
