import IVRMenuInfo from '../../../../definitions/IVRMenuInfo'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  ivrMenuId: string
  parent: Parent

  constructor(parent: Parent, ivrMenuId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.ivrMenuId = ivrMenuId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.ivrMenuId != null) {
      return `${this.parent.path()}/ivr-menus/${this.ivrMenuId}`
    }

    return `${this.parent.path()}/ivr-menus`
  }

  /**
   * Operation: Create IVR Menu
   * Http post /restapi/v1.0/account/{accountId}/ivr-menus
   */
  async post(iVRMenuInfo: IVRMenuInfo): Promise<IVRMenuInfo> {
    return this.rc.post(this.path(false), iVRMenuInfo)
  }

  /**
   * Operation: Get IVR Menu
   * Http get /restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}
   */
  async get(): Promise<IVRMenuInfo> {
    if (!this.ivrMenuId || this.ivrMenuId === null) {
      throw new Error("ivrMenuId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update IVR Menu
   * Http put /restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}
   */
  async put(iVRMenuInfo: IVRMenuInfo): Promise<IVRMenuInfo> {
    if (!this.ivrMenuId || this.ivrMenuId === null) {
      throw new Error("ivrMenuId must not be undefined or null")
    }

    return this.rc.put(this.path(), iVRMenuInfo)
  }
}

export default Index
