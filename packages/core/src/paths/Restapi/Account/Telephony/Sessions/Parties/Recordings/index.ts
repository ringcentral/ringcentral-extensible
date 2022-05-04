import { RestRequestConfig } from '../../../../../../../Rest';
import { CallRecordingUpdate, PauseResumeCallRecordingParameters, CallRecording } from '../../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  recordingId: string | null;

  constructor(parent: Parent, recordingId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.recordingId = recordingId;
  }

  path(withParameter = true): string {
    if (withParameter && this.recordingId !== null) {
      return `${this.parent.path()}/recordings/${this.recordingId}`;
    }
    return `${this.parent.path()}/recordings`;
  }

  /**
   * Starts a new call recording for the party
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  async post(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(false), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Pause/resume recording
   * HTTP Method: patch
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings/{recordingId}
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  async patch(callRecordingUpdate: CallRecordingUpdate, queryParams?: PauseResumeCallRecordingParameters, restRequestConfig?: RestRequestConfig): Promise<CallRecording> {
    if (this.recordingId === null) {
      throw new Error('recordingId must be specified.');
    }
    const r = await this.rc.patch<CallRecording>(this.path(), callRecordingUpdate, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
