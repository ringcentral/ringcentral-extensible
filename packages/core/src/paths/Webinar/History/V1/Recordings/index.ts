import Download from './Download';
import RecordingItemExtendedModel from '../../../../../definitions/RecordingItemExtendedModel';
import RecordingListResource from '../../../../../definitions/RecordingListResource';
import RcwHistoryListRecordingsParameters from '../../../../../definitions/RcwHistoryListRecordingsParameters';
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
   * Returns the list of webinar recordings for a given webinar host user
 *
   * HTTP Method: get
   * Endpoint: /webinar/history/v1/recordings
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  async list(queryParams?: RcwHistoryListRecordingsParameters, restRequestConfig?: RestRequestConfig): Promise<RecordingListResource> {
    const r = await this.rc.get<RecordingListResource>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns the webinar recording by ID (Webinar host's interface).
 * This API also returns sharing link if sharing is enabled.
 *
   * HTTP Method: get
   * Endpoint: /webinar/history/v1/recordings/{recordingId}
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<RecordingItemExtendedModel> {
    if (this.recordingId === null) {
      throw new Error('recordingId must be specified.');
    }
    const r = await this.rc.get<RecordingItemExtendedModel>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  download(): Download {
    return new Download(this);
  }
}
export default Index;
