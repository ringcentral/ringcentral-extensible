import { EmergencyLocationInfoRequest, EmergencyLocationList, ListEmergencyLocationsParameters, EmergencyLocationInfo } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class EmergencyLocations {
  rc: RestClient
  locationId: (string | null)
  parent: Parent

  constructor (parent: Parent, locationId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.locationId = locationId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.locationId !== null) {
      return `${this.parent.path()}/emergency-locations/${this.locationId}`
    }

    return `${this.parent.path()}/emergency-locations`
  }

  /**
   * Operation: Add Emergency Location
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/account/{accountId}/emergency-locations
   */
  async post (emergencyLocationInfoRequest: EmergencyLocationInfoRequest): Promise<string> {
    return this.rc.post(this.path(false), emergencyLocationInfoRequest)
  }

  /**
   * Operation: Get Emergency Location List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/emergency-locations
   */
  async list (queryParams?: ListEmergencyLocationsParameters): Promise<EmergencyLocationList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get Emergency Location
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/emergency-locations/{locationId}
   */
  async get (): Promise<EmergencyLocationInfo> {
    if (this.locationId === null) {
      throw new Error('locationId must be specified.')
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Emergency Location
   * Rate Limit Group: Heavy
   * Http put /restapi/v1.0/account/{accountId}/emergency-locations/{locationId}
   */
  async put (emergencyLocationInfoRequest: EmergencyLocationInfoRequest): Promise<EmergencyLocationInfo> {
    if (this.locationId === null) {
      throw new Error('locationId must be specified.')
    }

    return this.rc.put(this.path(), emergencyLocationInfoRequest)
  }
}

export default EmergencyLocations
