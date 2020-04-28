import { ExtensionCallerIdInfo } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class CallerId {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/caller-id`
  }

  /**
   * Operation: Get Extension Caller ID
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id
   */
  async get (): Promise<ExtensionCallerIdInfo> {
    const r = await this.rc.get(this.path())
    return r.data
  }

  /**
   * Operation: Update Extension Caller ID
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id
   */
  async put (extensionCallerIdInfo: ExtensionCallerIdInfo): Promise<ExtensionCallerIdInfo> {
    const r = await this.rc.put(this.path(), extensionCallerIdInfo)
    return r.data
  }
}

export default CallerId
