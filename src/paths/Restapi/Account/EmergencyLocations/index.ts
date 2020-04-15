import EmergencyLocationInfo from '../../../../definitions/EmergencyLocationInfo'
import ListEmergencyLocationsParameters from '../../../../definitions/ListEmergencyLocationsParameters'
import EmergencyLocationList from '../../../../definitions/EmergencyLocationList'
import EmergencyLocationInfoRequest from '../../../../definitions/EmergencyLocationInfoRequest'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  locationId: string
  parent: Parent

  constructor(parent: Parent, locationId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.locationId = locationId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.locationId != null) {
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
    if (!this.locationId || this.locationId === null) {
      throw new Error("locationId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Emergency Location
   * Http put /restapi/v1.0/account/{accountId}/emergency-locations/{locationId}
   */
  async put(emergencyLocationInfoRequest: EmergencyLocationInfoRequest): Promise<EmergencyLocationInfo> {
    if (!this.locationId || this.locationId === null) {
      throw new Error("locationId must not be undefined or null")
    }

    return this.rc.put(this.path(), emergencyLocationInfoRequest)
  }
}

export default Index
