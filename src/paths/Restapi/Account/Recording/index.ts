import Content from './Content';
import {RestRequestConfig} from '../../../../Rest';
import {GetCallRecordingResponse} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

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
      return `${this.parent.path()}/recording/${this.recordingId}`;
    }

    return `${this.parent.path()}/recording`;
  }

  /**
   * Operation: Get Call Recording
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/recording/{recordingId}
   */
  async get(config?: RestRequestConfig): Promise<GetCallRecordingResponse> {
    if (this.recordingId === null) {
      throw new Error('recordingId must be specified.');
    }

    const r = await this.rc.get<GetCallRecordingResponse>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  content(): Content {
    return new Content(this);
  }
}

export default Index;
