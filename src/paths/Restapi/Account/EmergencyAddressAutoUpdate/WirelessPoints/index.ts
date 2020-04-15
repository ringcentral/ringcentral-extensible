import UpdateWirelessPoint from '../../../../../definitions/UpdateWirelessPoint'
import CreateWirelessPoint from '../../../../../definitions/CreateWirelessPoint'
import WirelessPointInfo from '../../../../../definitions/WirelessPointInfo'
import ListWirelessPointsParameters from '../../../../../definitions/ListWirelessPointsParameters'
import WirelessPointsList from '../../../../../definitions/WirelessPointsList'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  pointId: string
  parent: Parent

  constructor(parent: Parent, pointId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.pointId = pointId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.pointId != null) {
      return `${this.parent.path()}/wireless-points/${this.pointId}`
    }

    return `${this.parent.path()}/wireless-points`
  }

  /**
   * Operation: Get Wireless Point List
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points
   */
  async list(queryParams?: ListWirelessPointsParameters): Promise<WirelessPointsList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Create Wireless Point
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points
   */
  async post(createWirelessPoint: CreateWirelessPoint): Promise<WirelessPointInfo> {
    return this.rc.post(this.path(false), createWirelessPoint)
  }

  /**
   * Operation: Get Wireless Point
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}
   */
  async get(): Promise<WirelessPointInfo> {
    if (!this.pointId || this.pointId === null) {
      throw new Error("pointId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Wireless Point
   * Http put /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}
   */
  async put(updateWirelessPoint: UpdateWirelessPoint): Promise<WirelessPointInfo> {
    if (!this.pointId || this.pointId === null) {
      throw new Error("pointId must not be undefined or null")
    }

    return this.rc.put(this.path(), updateWirelessPoint)
  }

  /**
   * Operation: Delete Wireless Point
   * Http delete /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}
   */
  async delete(): Promise<string> {
    if (!this.pointId || this.pointId === null) {
      throw new Error("pointId must not be undefined or null")
    }

    return this.rc.delete(this.path())
  }
}

export default Index
