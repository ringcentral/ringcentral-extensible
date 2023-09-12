import InviteeModel from '../../../../../../../definitions/InviteeModel';
import InviteeListResource from '../../../../../../../definitions/InviteeListResource';
import RcwHistoryListInviteesParameters from '../../../../../../../definitions/RcwHistoryListInviteesParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public inviteeId: string | null;

  public constructor(_parent: ParentInterface, inviteeId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.inviteeId = inviteeId;
  }

  public path(withParameter = true): string {
    if (withParameter && this.inviteeId !== null) {
      return `${this._parent.path()}/invitees/${this.inviteeId}`;
    }
    return `${this._parent.path()}/invitees`;
  }

  /**
   * Returns the list of Invitees (co-hosts and panelists) of a given Webinar Session (host interface).
 * An implicit record created for a Webinar 'Host' is always returned.
 *
   * HTTP Method: get
   * Endpoint: /webinar/history/v1/webinars/{webinarId}/sessions/{sessionId}/invitees
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  public async list(queryParams?: RcwHistoryListInviteesParameters, restRequestConfig?: RestRequestConfig): Promise<InviteeListResource> {
    const r = await this.rc.get<InviteeListResource>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns a historical session invitee information by ID (host interface).
   * HTTP Method: get
   * Endpoint: /webinar/history/v1/webinars/{webinarId}/sessions/{sessionId}/invitees/{inviteeId}
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<InviteeModel> {
    if (this.inviteeId === null) {
      throw new Error('inviteeId must be specified.');
    }
    const r = await this.rc.get<InviteeModel>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
