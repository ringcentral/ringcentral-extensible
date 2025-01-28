import SessionGlobalListResource from "../../../../../definitions/SessionGlobalListResource";
import RcwHistoryListAllSessionsParameters from "../../../../../definitions/RcwHistoryListAllSessionsParameters";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/sessions`;
  }
  /**
   * Returns the list of historical Webinar Sessions hosted by a current authorized user
   * sorted by 'endTime' in the descending order. Depending on a session status 'endTime' can
   * represent actual end time or scheduled end time.
   *
   * HTTP Method: get
   * Endpoint: /webinar/history/v1/sessions
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  public async get(
    queryParams?: RcwHistoryListAllSessionsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<SessionGlobalListResource> {
    const r = await this.rc.get<SessionGlobalListResource>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
