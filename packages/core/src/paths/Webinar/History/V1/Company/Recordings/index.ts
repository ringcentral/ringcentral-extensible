import RecordingAdminExtendedItemModel from '../../../../../../definitions/RecordingAdminExtendedItemModel';
import RecordingAdminListResource from '../../../../../../definitions/RecordingAdminListResource';
import RcwHistoryAdminListRecordingsParameters from '../../../../../../definitions/RcwHistoryAdminListRecordingsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

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
   * Returns the list of webinar recordings (Administrator's interface).
 * The user must have "WebinarSettings" permission granted otherwise the API returns HTTP 403.
 *
   * HTTP Method: get
   * Endpoint: /webinar/history/v1/company/recordings
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  async list(queryParams?: RcwHistoryAdminListRecordingsParameters, restRequestConfig?: RestRequestConfig): Promise<RecordingAdminListResource> {
    const r = await this.rc.get<RecordingAdminListResource>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns the webinar recording by ID (Administrator's interface).
 *
 * The user must have "WebinarSettings" permission granted otherwise the API returns HTTP 403.
 *
   * HTTP Method: get
   * Endpoint: /webinar/history/v1/company/recordings/{recordingId}
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<RecordingAdminExtendedItemModel> {
    if (this.recordingId === null) {
      throw new Error('recordingId must be specified.');
    }
    const r = await this.rc.get<RecordingAdminExtendedItemModel>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
