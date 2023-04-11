import RecordingDownloadModel from '../../../../../../definitions/RecordingDownloadModel';
import RcwHistoryGetRecordingDownloadParameters from '../../../../../../definitions/RcwHistoryGetRecordingDownloadParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/download`;
  }

  /**
   * Returns the webinar recording download link (both Webinar host's and admin interface).
 *
 * If called by a webinar host, the API returns error (403) if recording downloading is prohibited by company settings.
 * The admin user who has "WebinarSettings" permission should be able to download recording regardless of current company settings.
 *
   * HTTP Method: get
   * Endpoint: /webinar/history/v1/recordings/{recordingId}/download
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  async get(queryParams?: RcwHistoryGetRecordingDownloadParameters, restRequestConfig?: RestRequestConfig): Promise<RecordingDownloadModel> {
    const r = await this.rc.get<RecordingDownloadModel>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
