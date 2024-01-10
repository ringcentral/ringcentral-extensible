import type UpdateInviteeRequest from '../../../../../../../definitions/UpdateInviteeRequest';
import type InviteeResource from '../../../../../../../definitions/InviteeResource';
import type BulkUpdateInviteesResponse from '../../../../../../../definitions/BulkUpdateInviteesResponse';
import type BulkUpdateInviteesRequest from '../../../../../../../definitions/BulkUpdateInviteesRequest';
import type WcsInviteeListResource from '../../../../../../../definitions/WcsInviteeListResource';
import type RcwConfigListInviteesParameters from '../../../../../../../definitions/RcwConfigListInviteesParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../../types';

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
   * Returns the list of Invitees (co-hosts and panelists in phase 1
   * and also invited attendees in subsequent phases) of a given Webinar Session.
   * An implicit record created for a Webinar 'Host' is always returned.
   *
   * HTTP Method: get
   * Endpoint: /webinar/configuration/v1/webinars/{webinarId}/sessions/{sessionId}/invitees
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  public async list(
    queryParams?: RcwConfigListInviteesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<WcsInviteeListResource> {
    const r = await this.rc.get<WcsInviteeListResource>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Adds, updates and deletes Webinar Session invitees in bulk (co-hosts and panelists in phase 1
   * and also invited attendees in subsequent phases).
   * The payload may contain multiple added, updated or deleted invitees.
   * For each added record 'role' and either 'firstName'/'lastName'/'email' (for non-authenticated users)
   * or 'linkedUser.*' (for authenticated users) must be specified, but not both.
   * For updated invitees 'id'  and 'role' must be specified, 'linkedUser' change is not supported.
   * For deleted invitees only there ids should be specified.
   * The response contains added/updated records (full) and deleted records (ids only).
   *
   * Deleting an invitee for a Session in 'Active' or 'Finished' status is prohibited.
   *
   * HTTP Method: patch
   * Endpoint: /webinar/configuration/v1/webinars/{webinarId}/sessions/{sessionId}/invitees
   * Rate Limit Group: Heavy
   * App Permission: EditWebinars
   */
  public async patch(
    bulkUpdateInviteesRequest: BulkUpdateInviteesRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<BulkUpdateInviteesResponse> {
    const r = await this.rc.patch<BulkUpdateInviteesResponse>(
      this.path(false),
      bulkUpdateInviteesRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns a Session Invitee information by ID
   * HTTP Method: get
   * Endpoint: /webinar/configuration/v1/webinars/{webinarId}/sessions/{sessionId}/invitees/{inviteeId}
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<InviteeResource> {
    if (this.inviteeId === null) {
      throw new Error('inviteeId must be specified.');
    }
    const r = await this.rc.get<InviteeResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates a Session Invitee. 'role' is required (it can be changed from 'Panelist' to 'CoHost' or vise versa).
   * It is disallowed to update 'linkedUser': it should be done by deleting then adding an invitee.
   * For non-authenticated users 'firstName'/'lastName'/'email' can be specified, but not both.
   * Implicit record created for a Webinar 'Host' cannot be modified.
   * Also it is disallowed to change any other role to 'Host'.
   *
   * HTTP Method: put
   * Endpoint: /webinar/configuration/v1/webinars/{webinarId}/sessions/{sessionId}/invitees/{inviteeId}
   * Rate Limit Group: Heavy
   * App Permission: EditWebinars
   */
  public async put(
    updateInviteeRequest: UpdateInviteeRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<InviteeResource> {
    if (this.inviteeId === null) {
      throw new Error('inviteeId must be specified.');
    }
    const r = await this.rc.put<InviteeResource>(this.path(), updateInviteeRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes a Session Invitee. Implicit record created for a Webinar 'Host' cannot be deleted.
   * Deleting an invitee for a Session in 'Active' or 'Finished' status is prohibited (HTTP 403).
   *
   * HTTP Method: delete
   * Endpoint: /webinar/configuration/v1/webinars/{webinarId}/sessions/{sessionId}/invitees/{inviteeId}
   * Rate Limit Group: Heavy
   * App Permission: EditWebinars
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.inviteeId === null) {
      throw new Error('inviteeId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
