import SessionGlobalListResource from '../../../../../../definitions/SessionGlobalListResource';
import RcwHistoryListAllCompanySessionsParameters from '../../../../../../definitions/RcwHistoryListAllCompanySessionsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/sessions`;
  }

  /**
   * Returns the list of historical Webinar Sessions hosted by particular user(s) or all company users
 * sorted by 'endTime' in the descending order. Depending on a session status 'endTime' can
 * represent actual end time or scheduled end time.
 * The user must have "WebinarSettings" permission granted otherwise the API returns HTTP 403.
 *
   * HTTP Method: get
   * Endpoint: /webinar/history/v1/company/sessions
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  async get(queryParams?: RcwHistoryListAllCompanySessionsParameters, restRequestConfig?: RestRequestConfig): Promise<SessionGlobalListResource> {
    const r = await this.rc.get<SessionGlobalListResource>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
