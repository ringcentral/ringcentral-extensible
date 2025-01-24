import type CallRecording from "../../../../../../../definitions/CallRecording";
import type PauseResumeCallRecordingParameters from "../../../../../../../definitions/PauseResumeCallRecordingParameters";
import type CallRecordingUpdate from "../../../../../../../definitions/CallRecordingUpdate";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public recordingId: string | null;

  public constructor(
    _parent: ParentInterface,
    recordingId: string | null = null,
  ) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.recordingId = recordingId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.recordingId !== null) {
      return `${this._parent.path()}/recordings/${this.recordingId}`;
    }
    return `${this._parent.path()}/recordings`;
  }
  /**
   * Starts a new call recording for a call party.
   * *Please note* this API does not allow conference calls to be recorded.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  public async post(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(false),
      {},
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Pause/resume recording
   * HTTP Method: patch
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings/{recordingId}
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  public async patch(
    callRecordingUpdate: CallRecordingUpdate,
    queryParams?: PauseResumeCallRecordingParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallRecording> {
    if (this.recordingId === null) {
      throw new Error("recordingId must be specified.");
    }
    const r = await this.rc.patch<CallRecording>(
      this.path(),
      callRecordingUpdate,
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
