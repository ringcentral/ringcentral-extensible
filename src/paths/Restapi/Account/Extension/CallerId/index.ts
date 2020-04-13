import ExtensionCallerIdInfo from '../../../../../definitions/ExtensionCallerIdInfo'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  string path() {
    return `${this.parent.path()}/caller-id`
  }

  /**
   * Operation: Get Extension Caller ID
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id
   */
  async get(): Promise<ExtensionCallerIdInfo> {
    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Extension Caller ID
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id
   */
  async put(ExtensionCallerIdInfo extensionCallerIdInfo): Promise<ExtensionCallerIdInfo> {
    return this.rc.put(this.path(), extensionCallerIdInfo)
  }
}

export default Index
