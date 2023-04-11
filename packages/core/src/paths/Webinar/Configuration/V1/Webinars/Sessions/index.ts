import Invitees from './Invitees';
import WcsSessionResource from '../../../../../../definitions/WcsSessionResource';
import WcsSessionBaseModel from '../../../../../../definitions/WcsSessionBaseModel';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  sessionId: string | null;

  constructor(parent: ParentInterface, sessionId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.sessionId = sessionId;
  }

  path(withParameter = true): string {
    if (withParameter && this.sessionId !== null) {
      return `${this.parent.path()}/sessions/${this.sessionId}`;
    }
    return `${this.parent.path()}/sessions`;
  }

  /**
   * Creates a new Session for a given Webinar
   * HTTP Method: post
   * Endpoint: /webinar/configuration/v1/webinars/{webinarId}/sessions
   * Rate Limit Group: Heavy
   * App Permission: EditWebinars
   */
  async post(wcsSessionBaseModel: WcsSessionBaseModel, restRequestConfig?: RestRequestConfig): Promise<WcsSessionResource> {
    const r = await this.rc.post<WcsSessionResource>(this.path(false), wcsSessionBaseModel, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns a Webinar Session by ID.
   * HTTP Method: get
   * Endpoint: /webinar/configuration/v1/webinars/{webinarId}/sessions/{sessionId}
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<WcsSessionResource> {
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
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
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
  async patch(wcsSessionBaseModel: WcsSessionBaseModel, restRequestConfig?: RestRequestConfig): Promise<WcsSessionResource> {
    if (this.sessionId === null) {
      throw new Error('sessionId must be specified.');
    }
    const r = await this.rc.patch<WcsSessionResource>(this.path(), wcsSessionBaseModel, undefined, restRequestConfig);
    return r.data;
  }

  invitees(inviteeId: (string | null) = null): Invitees {
    return new Invitees(this, inviteeId);
  }
}
export default Index;
