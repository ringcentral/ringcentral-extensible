import { GetDeviceInfoResponse, ReadDeviceParameters, AccountDeviceUpdate, UpdateDeviceParameters } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Device {
  rc: RestClient
  deviceId: (string | null)
  parent: Parent

  constructor (parent: Parent, deviceId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.deviceId = deviceId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.deviceId !== null) {
      return `${this.parent.path()}/device/${this.deviceId}`
    }

    return `${this.parent.path()}/device`
  }

  /**
   * Operation: Get Device
   * Http get /restapi/v1.0/account/{accountId}/device/{deviceId}
   */
  async get (queryParams?: ReadDeviceParameters): Promise<GetDeviceInfoResponse> {
    if (this.deviceId === null) {
      throw new Error('deviceId must be specified.')
    }

    return this.rc.get(this.path(), queryParams)
  }

  /**
   * Operation: Update Device
   * Http put /restapi/v1.0/account/{accountId}/device/{deviceId}
   */
  async put (accountDeviceUpdate: AccountDeviceUpdate, queryParams?: UpdateDeviceParameters): Promise<GetDeviceInfoResponse> {
    if (this.deviceId === null) {
      throw new Error('deviceId must be specified.')
    }

    return this.rc.put(this.path(), accountDeviceUpdate, queryParams)
  }
}

export default Device
