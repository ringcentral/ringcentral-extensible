import Content from './Content';
import GetCallRecordingResponse from '../../../../definitions/GetCallRecordingResponse';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public recordingId: string | null;

  public constructor(_parent: ParentInterface, recordingId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.recordingId = recordingId;
  }

  public path(withParameter = true): string {
    if (withParameter && this.recordingId !== null) {
      return `${this._parent.path()}/recording/${this.recordingId}`;
    }
    return `${this._parent.path()}/recording`;
  }

  /**
   * Returns call recordings by ID(s).
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/recording/{recordingId}
   * Rate Limit Group: Heavy
   * App Permission: ReadCallRecording
   * User Permission: ReadCallRecording
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<GetCallRecordingResponse> {
    if (this.recordingId === null) {
      throw new Error('recordingId must be specified.');
    }
    const r = await this.rc.get<GetCallRecordingResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  public content(): Content {
    return new Content(this);
  }
}
export default Index;
