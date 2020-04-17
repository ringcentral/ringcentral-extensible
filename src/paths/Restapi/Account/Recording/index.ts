import Content from './Content'
import { GetCallRecordingResponse } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Recording {
  rc: RestClient
  recordingId: string
  parent: Parent

  constructor(parent: Parent, recordingId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.recordingId = recordingId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.recordingId !== null) {
      return `${this.parent.path()}/recording/${this.recordingId}`
    }

    return `${this.parent.path()}/recording`
  }

  /**
   * Operation: Get Call Recording
   * Http get /restapi/v1.0/account/{accountId}/recording/{recordingId}
   */
  async get(): Promise<GetCallRecordingResponse> {
    if (this.recordingId === undefined || this.recordingId === null) {
      throw new Error("recordingId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  content(): Content {
    return new Content(this)
  }
}

export default Recording
