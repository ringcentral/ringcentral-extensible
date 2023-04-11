import CloudRecording from '../../../../../definitions/CloudRecording';
import CloudRecordings from '../../../../../definitions/CloudRecordings';
import GetAccountRecordingsParameters from '../../../../../definitions/GetAccountRecordingsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  recordingId: string | null;

  constructor(parent: ParentInterface, recordingId: string | null = null) {
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
   * Returns the list of meeting recordings belonging to all account users.
   * HTTP Method: get
   * Endpoint: /rcvideo/v1/account/{accountId}/recordings
   * Rate Limit Group: Light
   * App Permission: Video
   */
  async list(queryParams?: GetAccountRecordingsParameters, restRequestConfig?: RestRequestConfig): Promise<CloudRecordings> {
    const r = await this.rc.get<CloudRecordings>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns the information about particular recording.
   * HTTP Method: get
   * Endpoint: /rcvideo/v1/account/{accountId}/recordings/{recordingId}
   * Rate Limit Group: Light
   * App Permission: Video
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<CloudRecording> {
    if (this.recordingId === null) {
      throw new Error('recordingId must be specified.');
    }
    const r = await this.rc.get<CloudRecording>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
