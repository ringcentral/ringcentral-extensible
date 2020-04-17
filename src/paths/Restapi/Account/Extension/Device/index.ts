import { GetExtensionDevicesResponse, ListExtensionDevicesParameters } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Device {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/device`
  }

  /**
   * Operation: Get Extension Device List
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/device
   */
  async get(queryParams?: ListExtensionDevicesParameters): Promise<GetExtensionDevicesResponse> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Device
