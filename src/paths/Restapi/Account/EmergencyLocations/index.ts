import { EmergencyLocationInfoRequest, EmergencyLocationList, ListEmergencyLocationsParameters, EmergencyLocationInfo } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class EmergencyLocations {
  rc: RestClient
  locationId: string
  parent: Parent

  constructor(parent: Parent, locationId: string) {
    this.parent = parent
    this.rc = parent.rc
    this.locationId = locationId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.locationId) {
      return `${this.parent.path()}/emergency-locations/${this.locationId}`
    }

    return `${this.parent.path()}/emergency-locations`
  }

  /**
   * Operation: Add Emergency Location
   * Http post /restapi/v1.0/account/{accountId}/emergency-locations
   */
  async post(emergencyLocationInfoRequest: EmergencyLocationInfoRequest): Promise<string> {
    return this.rc.post(this.path(false), emergencyLocationInfoRequest)
  }

  /**
   * Operation: Get Emergency Location List
   * Http get /restapi/v1.0/account/{accountId}/emergency-locations
   */
  async list(queryParams?: ListEmergencyLocationsParameters): Promise<EmergencyLocationList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get Emergency Location
   * Http get /restapi/v1.0/account/{accountId}/emergency-locations/{locationId}
   */
  async get(): Promise<EmergencyLocationInfo> {
    if (!this.locationId) {
      throw new Error('locationId must not be undefined')
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Emergency Location
   * Http put /restapi/v1.0/account/{accountId}/emergency-locations/{locationId}
   */
  async put(emergencyLocationInfoRequest: EmergencyLocationInfoRequest): Promise<EmergencyLocationInfo> {
    if (!this.locationId) {
      throw new Error('locationId must not be undefined')
    }

    return this.rc.put(this.path(), emergencyLocationInfoRequest)
  }
}

export default EmergencyLocations
