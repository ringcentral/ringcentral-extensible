import type RecordingAdminExtendedItemModel from '../../../../../../definitions/RecordingAdminExtendedItemModel';
import type RecordingAdminListResource from '../../../../../../definitions/RecordingAdminListResource';
import type RcwHistoryAdminListRecordingsParameters from '../../../../../../definitions/RcwHistoryAdminListRecordingsParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

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
      return `${this._parent.path()}/recordings/${this.recordingId}`;
    }
    return `${this._parent.path()}/recordings`;
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
  public async list(
    queryParams?: RcwHistoryAdminListRecordingsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<RecordingAdminListResource> {
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
  public async get(restRequestConfig?: RestRequestConfig): Promise<RecordingAdminExtendedItemModel> {
    if (this.recordingId === null) {
      throw new Error('recordingId must be specified.');
    }
    const r = await this.rc.get<RecordingAdminExtendedItemModel>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
