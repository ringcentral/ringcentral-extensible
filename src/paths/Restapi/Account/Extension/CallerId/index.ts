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
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id
   */
  async get (): Promise<ExtensionCallerIdInfo> {
    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Extension Caller ID
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id
   */
  async put (extensionCallerIdInfo: ExtensionCallerIdInfo): Promise<ExtensionCallerIdInfo> {
    return this.rc.put(this.path(), extensionCallerIdInfo)
  }
}

export default CallerId
