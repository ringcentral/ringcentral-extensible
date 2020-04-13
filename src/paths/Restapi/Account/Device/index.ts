import AccountDeviceUpdate from '../../../../definitions/AccountDeviceUpdate'
import DeviceResource from '../../../../definitions/DeviceResource'
import GetDeviceInfoResponse from '../../../../definitions/GetDeviceInfoResponse'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  deviceId: string
  parent: Parent

  constructor(parent: Parent, deviceId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.deviceId = deviceId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.deviceId != null) {
      return `${this.parent.path()}/device/${this.deviceId}`
    }

    return `${this.parent.path()}/device`
  }

  /**
   * Operation: Get Device
   * Http get /restapi/v1.0/account/{accountId}/device/{deviceId}
   */
  async get(ReadDeviceParameters queryParams = null): Promise<GetDeviceInfoResponse> {
    if (!this.deviceId || this.deviceId === null) {
      throw new Error("deviceId must not be undefined or null")
    }

    return this.rc.get(this.path(), queryParams)
  }

  /**
   * Operation: Update Device
   * Http put /restapi/v1.0/account/{accountId}/device/{deviceId}
   */
  async put(AccountDeviceUpdate accountDeviceUpdate): Promise<DeviceResource> {
    if (!this.deviceId || this.deviceId === null) {
      throw new Error("deviceId must not be undefined or null")
    }

    return this.rc.put(this.path(), accountDeviceUpdate)
  }
}

export default Index
