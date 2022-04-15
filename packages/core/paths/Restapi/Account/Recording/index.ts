import Content from './Content';
import { RestRequestConfig } from '../../../../Rest';
import { GetCallRecordingResponse } from '../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../..';

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
      return `${this.parent.path()}/recording/${this.recordingId}`;
    }
    return `${this.parent.path()}/recording`;
  }

  /**
   * Returns call recordings by ID(s).
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/recording/{recordingId}
   * Rate Limit Group: Heavy
   * App Permission: ReadCallRecording
   * User Permission: ReadCallRecording
   */
  async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetCallRecordingResponse> {
    if (this.recordingId === null) {
      throw new Error('recordingId must be specified.');
    }
    const r = await this.rc.get<GetCallRecordingResponse>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  content(): Content {
    return new Content(this);
  }
}
export default Index;
