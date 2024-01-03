import Self from './Self';
import type ParticipantListResource from '../../../../../../../definitions/ParticipantListResource';
import type RcwHistoryListParticipantsParameters from '../../../../../../../definitions/RcwHistoryListParticipantsParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/participants`;
  }
  /**
   * Returns the list of participants of a given Webinar Session (host interface).
   *
   * HTTP Method: get
   * Endpoint: /webinar/history/v1/webinars/{webinarId}/sessions/{sessionId}/participants
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  public async get(
    queryParams?: RcwHistoryListParticipantsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ParticipantListResource> {
    const r = await this.rc.get<ParticipantListResource>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }

  public self(): Self {
    return new Self(this);
  }
}
export default Index;
