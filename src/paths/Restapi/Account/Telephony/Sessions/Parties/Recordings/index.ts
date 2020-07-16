import {RestRequestConfig} from '../../../../../../../Rest';
import {
  CallRecording,
  CallRecordingUpdate,
  PauseResumeCallRecordingParameters,
} from '../../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../../..';

class Index {
  rc: RingCentral;
  recordingId: string | null;
  parent: Parent;

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
   * Operation: Create Recording
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings
   */
  async post(config?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(false), undefined, config);
    return r.data;
  }

  /**
   * Operation: Pause/Resume Recording
   * Rate Limit Group: Light
   * Http patch /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings/{recordingId}
   */
  async patch(
    callRecordingUpdate: CallRecordingUpdate,
    queryParams?: PauseResumeCallRecordingParameters,
    config?: RestRequestConfig
  ): Promise<CallRecording> {
    if (this.recordingId === null) {
      throw new Error('recordingId must be specified.');
    }

    const r = await this.rc.patch<CallRecording>(
      this.path(),
      callRecordingUpdate,
      queryParams,
      config
    );
    return r.data;
  }
}

export default Index;
