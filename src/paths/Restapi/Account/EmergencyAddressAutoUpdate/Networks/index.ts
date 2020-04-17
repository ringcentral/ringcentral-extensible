import { NetworksList, NetworkInfo, CreateNetworkRequest, UpdateNetworkRequest } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Networks {
  rc: RestClient
  networkId: string
  parent: Parent

  constructor(parent: Parent, networkId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.networkId = networkId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.networkId !== null) {
      return `${this.parent.path()}/networks/${this.networkId}`
    }

    return `${this.parent.path()}/networks`
  }

  /**
   * Operation: Get Network Map
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks
   */
  async list(): Promise<NetworksList> {
    return this.rc.get(this.path(false))
  }

  /**
   * Operation: Create Network
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks
   */
  async post(createNetworkRequest: CreateNetworkRequest): Promise<NetworkInfo> {
    return this.rc.post(this.path(false), createNetworkRequest)
  }

  /**
   * Operation: Get Network
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}
   */
  async get(): Promise<NetworkInfo> {
    if (this.networkId === undefined || this.networkId === null) {
      throw new Error("networkId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Network
   * Http put /restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}
   */
  async put(updateNetworkRequest: UpdateNetworkRequest): Promise<string> {
    if (this.networkId === undefined || this.networkId === null) {
      throw new Error("networkId must not be undefined or null")
    }

    return this.rc.put(this.path(), updateNetworkRequest)
  }

  /**
   * Operation: Delete Network
   * Http delete /restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}
   */
  async delete(): Promise<string> {
    if (this.networkId === undefined || this.networkId === null) {
      throw new Error("networkId must not be undefined or null")
    }

    return this.rc.delete(this.path())
  }
}

export default Networks
