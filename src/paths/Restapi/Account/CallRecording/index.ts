import CustomGreetings from './CustomGreetings'
import BulkAssign from './BulkAssign'
import Extensions from './Extensions'
import { CallRecordingSettingsResource } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class CallRecording {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/call-recording`
  }

  /**
   * Operation: Get Call Recording Settings
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/call-recording
   */
  async get (): Promise<CallRecordingSettingsResource> {
    const r = await this.rc.get(this.path())
    return r.data
  }

  /**
   * Operation: Update Call Recording Settings
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/call-recording
   */
  async put (callRecordingSettingsResource: CallRecordingSettingsResource): Promise<CallRecordingSettingsResource> {
    const r = await this.rc.put(this.path(), callRecordingSettingsResource)
    return r.data
  }

  extensions (): Extensions {
    return new Extensions(this)
  }

  bulkAssign (): BulkAssign {
    return new BulkAssign(this)
  }

  customGreetings (greetingId: (string | null) = null): CustomGreetings {
    return new CustomGreetings(this, greetingId)
  }
}

export default CallRecording
