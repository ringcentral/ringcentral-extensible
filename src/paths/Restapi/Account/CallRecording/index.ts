import CallRecordingSettingsResource from '../../../../definitions/CallRecordingSettingsResource'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/call-recording`
  }

  /**
   * Operation: Get Call Recording Settings
   * Http get /restapi/v1.0/account/{accountId}/call-recording
   */
  async get(): Promise<CallRecordingSettingsResource> {
    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Call Recording Settings
   * Http put /restapi/v1.0/account/{accountId}/call-recording
   */
  async put(callRecordingSettingsResource: CallRecordingSettingsResource): Promise<CallRecordingSettingsResource> {
    return this.rc.put(this.path(), callRecordingSettingsResource)
  }
}

export default Index
