import WcsSessionGlobalListResource from '../../../../../definitions/WcsSessionGlobalListResource';
import RcwConfigListAllSessionsParameters from '../../../../../definitions/RcwConfigListAllSessionsParameters';
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
   * Returns the list of Webinar Sessions hosted by a current authorized user sorted by
 * 'scheduledStartTime' or 'creationTime' (if 'scheduledStartTime' is not set) in the ascending order
 *
   * HTTP Method: get
   * Endpoint: /webinar/configuration/v1/sessions
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  async get(queryParams?: RcwConfigListAllSessionsParameters, restRequestConfig?: RestRequestConfig): Promise<WcsSessionGlobalListResource> {
    const r = await this.rc.get<WcsSessionGlobalListResource>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
