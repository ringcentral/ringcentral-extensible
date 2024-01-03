import Invitees from './Invitees';
import type WcsSessionResource from '../../../../../../definitions/WcsSessionResource';
import type WcsSessionWithLocaleCodeModel from '../../../../../../definitions/WcsSessionWithLocaleCodeModel';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public sessionId: string | null;

  public constructor(_parent: ParentInterface, sessionId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.sessionId = sessionId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.sessionId !== null) {
      return `${this._parent.path()}/sessions/${this.sessionId}`;
    }
    return `${this._parent.path()}/sessions`;
  }
  /**
   * Creates a new Session for a given Webinar
   * HTTP Method: post
   * Endpoint: /webinar/configuration/v1/webinars/{webinarId}/sessions
   * Rate Limit Group: Heavy
   * App Permission: EditWebinars
   */
  public async post(
    wcsSessionWithLocaleCodeModel: WcsSessionWithLocaleCodeModel,
    restRequestConfig?: RestRequestConfig,
  ): Promise<WcsSessionResource> {
    const r = await this.rc.post<WcsSessionResource>(
      this.path(false),
      wcsSessionWithLocaleCodeModel,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns a Webinar Session by ID.
   * HTTP Method: get
   * Endpoint: /webinar/configuration/v1/webinars/{webinarId}/sessions/{sessionId}
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<WcsSessionResource> {
    if (this.sessionId === null) {
      throw new Error('sessionId must be specified.');
    }
    const r = await this.rc.get<WcsSessionResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes a Webinar Session. All child objects (Invitees) will be also deleted.
   * It is disallowed to delete a Session which is in 'Active' or 'Finished' state
   *
   * HTTP Method: delete
   * Endpoint: /webinar/configuration/v1/webinars/{webinarId}/sessions/{sessionId}
   * Rate Limit Group: Heavy
   * App Permission: EditWebinars
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.sessionId === null) {
      throw new Error('sessionId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates a Webinar Session. The payload may contain certain attributes from the Session resource
   * (it is a partial update). Changing the 'status' field usually invokes certain workflow actions.
   * Updating a Session in 'Active' or 'Finished' status is prohibited.
   * Some status transitions (for example, to 'Active" or 'Finished') may be prohibited.
   *
   * HTTP Method: patch
   * Endpoint: /webinar/configuration/v1/webinars/{webinarId}/sessions/{sessionId}
   * Rate Limit Group: Heavy
   * App Permission: EditWebinars
   */
  public async patch(
    wcsSessionWithLocaleCodeModel: WcsSessionWithLocaleCodeModel,
    restRequestConfig?: RestRequestConfig,
  ): Promise<WcsSessionResource> {
    if (this.sessionId === null) {
      throw new Error('sessionId must be specified.');
    }
    const r = await this.rc.patch<WcsSessionResource>(
      this.path(),
      wcsSessionWithLocaleCodeModel,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public invitees(inviteeId: string | null = null): Invitees {
    return new Invitees(this, inviteeId);
  }
}
export default Index;
