import { WirelessPointsList, ListWirelessPointsParameters, WirelessPointInfo, CreateWirelessPoint, UpdateWirelessPoint } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class WirelessPoints {
  rc: RestClient
  pointId: (string | null)
  parent: Parent

  constructor (parent: Parent, pointId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.pointId = pointId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.pointId !== null) {
      return `${this.parent.path()}/wireless-points/${this.pointId}`
    }

    return `${this.parent.path()}/wireless-points`
  }

  /**
   * Operation: Get Wireless Point List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points
   */
  async list (queryParams?: ListWirelessPointsParameters): Promise<WirelessPointsList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Create Wireless Point
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points
   */
  async post (createWirelessPoint: CreateWirelessPoint): Promise<WirelessPointInfo> {
    return this.rc.post(this.path(false), createWirelessPoint)
  }

  /**
   * Operation: Get Wireless Point
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}
   */
  async get (): Promise<WirelessPointInfo> {
    if (this.pointId === null) {
      throw new Error('pointId must be specified.')
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Wireless Point
   * Rate Limit Group: Heavy
   * Http put /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}
   */
  async put (updateWirelessPoint: UpdateWirelessPoint): Promise<WirelessPointInfo> {
    if (this.pointId === null) {
      throw new Error('pointId must be specified.')
    }

    return this.rc.put(this.path(), updateWirelessPoint)
  }

  /**
   * Operation: Delete Wireless Point
   * Rate Limit Group: Heavy
   * Http delete /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}
   */
  async delete (): Promise<string> {
    if (this.pointId === null) {
      throw new Error('pointId must be specified.')
    }

    return this.rc.delete(this.path())
  }
}

export default WirelessPoints
