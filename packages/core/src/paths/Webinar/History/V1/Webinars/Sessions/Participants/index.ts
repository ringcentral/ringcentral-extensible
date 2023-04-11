import ParticipantListResource from '../../../../../../../definitions/ParticipantListResource';
import RcwHistoryListParticipantsParameters from '../../../../../../../definitions/RcwHistoryListParticipantsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/participants`;
  }

  /**
   * Returns the list of participants of a given Webinar Session.
 *
   * HTTP Method: get
   * Endpoint: /webinar/history/v1/webinars/{webinarId}/sessions/{sessionId}/participants
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  async get(queryParams?: RcwHistoryListParticipantsParameters, restRequestConfig?: RestRequestConfig): Promise<ParticipantListResource> {
    const r = await this.rc.get<ParticipantListResource>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
