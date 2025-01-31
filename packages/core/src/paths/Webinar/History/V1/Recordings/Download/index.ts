import RecordingDownloadModel from "../../../../../../definitions/RecordingDownloadModel.js";
import RcwHistoryGetRecordingDownloadParameters from "../../../../../../definitions/RcwHistoryGetRecordingDownloadParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/download`;
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
  public async get(
    queryParams?: RcwHistoryGetRecordingDownloadParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<RecordingDownloadModel> {
    const r = await this.rc.get<RecordingDownloadModel>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
