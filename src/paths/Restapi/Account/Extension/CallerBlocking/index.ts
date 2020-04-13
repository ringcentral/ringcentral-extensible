import CallerBlockingSettingsUpdate from '../../../../../definitions/CallerBlockingSettingsUpdate'
import CallerBlockingSettings from '../../../../../definitions/CallerBlockingSettings'
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
    return `${this.parent.path()}/caller-blocking`
  }

  /**
   * Operation: Get Caller Blocking Settings
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking
   */
  async get(): Promise<CallerBlockingSettings> {
    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Caller Blocking Settings
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking
   */
  async put(CallerBlockingSettingsUpdate callerBlockingSettingsUpdate): Promise<CallerBlockingSettings> {
    return this.rc.put(this.path(), callerBlockingSettingsUpdate)
  }
}

export default Index
