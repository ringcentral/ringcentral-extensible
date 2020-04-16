import PhoneNumbers from './PhoneNumbers'
import CallerBlockingSettingsUpdate from '../../../../../definitions/CallerBlockingSettingsUpdate'
import CallerBlockingSettings from '../../../../../definitions/CallerBlockingSettings'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
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
  async put(callerBlockingSettingsUpdate: CallerBlockingSettingsUpdate): Promise<CallerBlockingSettings> {
    return this.rc.put(this.path(), callerBlockingSettingsUpdate)
  }

  phoneNumbers(blockedNumberId: string = null): PhoneNumbers {
    return new PhoneNumbers(this, blockedNumberId)
  }
}

export default Index
