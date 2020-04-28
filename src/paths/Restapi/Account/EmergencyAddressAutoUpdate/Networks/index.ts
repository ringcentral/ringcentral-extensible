import { NetworksList, NetworkInfo, CreateNetworkRequest, UpdateNetworkRequest } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Networks {
  rc: RestClient
  networkId: (string | null)
  parent: Parent

  constructor (parent: Parent, networkId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.networkId = networkId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.networkId !== null) {
      return `${this.parent.path()}/networks/${this.networkId}`
    }

    return `${this.parent.path()}/networks`
  }

  /**
   * Operation: Get Network Map
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks
   */
  async list (): Promise<NetworksList> {
    const r = await this.rc.get(this.path(false))
    return r.data
  }

  /**
   * Operation: Create Network
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks
   */
  async post (createNetworkRequest: CreateNetworkRequest): Promise<NetworkInfo> {
    const r = await this.rc.post(this.path(false), createNetworkRequest)
    return r.data
  }

  /**
   * Operation: Get Network
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}
   */
  async get (): Promise<NetworkInfo> {
    if (this.networkId === null) {
      throw new Error('networkId must be specified.')
    }

    const r = await this.rc.get(this.path())
    return r.data
  }

  /**
   * Operation: Update Network
   * Rate Limit Group: Heavy
   * Http put /restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}
   */
  async put (updateNetworkRequest: UpdateNetworkRequest): Promise<string> {
    if (this.networkId === null) {
      throw new Error('networkId must be specified.')
    }

    const r = await this.rc.put(this.path(), updateNetworkRequest)
    return r.data
  }

  /**
   * Operation: Delete Network
   * Rate Limit Group: Heavy
   * Http delete /restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}
   */
  async delete (): Promise<string> {
    if (this.networkId === null) {
      throw new Error('networkId must be specified.')
    }

    const r = await this.rc.delete(this.path())
    return r.data
  }
}

export default Networks
