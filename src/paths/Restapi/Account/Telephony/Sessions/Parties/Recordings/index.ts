import { CallRecording, CallRecordingUpdate, PauseResumeCallRecordingParameters } from '../../../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../../../..'

class Recordings {
  rc: RestClient
  recordingId: (string | null)
  parent: Parent

  constructor(parent: Parent, recordingId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.recordingId = recordingId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.recordingId !== null) {
      return `${this.parent.path()}/recordings/${this.recordingId}`
    }

    return `${this.parent.path()}/recordings`
  }

  /**
   * Operation: Create Recording
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings
   */
  async post(): Promise<string> {
    return this.rc.post(this.path(false))
  }

  /**
   * Operation: Pause/Resume Recording
   * Http patch /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings/{recordingId}
   */
  async patch(callRecordingUpdate: CallRecordingUpdate, queryParams?: PauseResumeCallRecordingParameters): Promise<CallRecording> {
    if (this.recordingId === null) {
      throw new Error('recordingId must be specified.')
    }

    return this.rc.patch(this.path(), callRecordingUpdate, queryParams)
  }
}

export default Recordings
