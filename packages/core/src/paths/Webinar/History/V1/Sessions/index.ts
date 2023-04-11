import SessionGlobalListResource from '../../../../../definitions/SessionGlobalListResource';
import RcwHistoryListAllSessionsParameters from '../../../../../definitions/RcwHistoryListAllSessionsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

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
   * Returns the list of historical Webinar Sessions hosted by a current authorized user
 * sorted by 'endTime' in the descending order. Depending on a session status 'endTime' can
 * represent actual end time or scheduled end time.
 *
   * HTTP Method: get
   * Endpoint: /webinar/history/v1/sessions
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  async get(queryParams?: RcwHistoryListAllSessionsParameters, restRequestConfig?: RestRequestConfig): Promise<SessionGlobalListResource> {
    const r = await this.rc.get<SessionGlobalListResource>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
