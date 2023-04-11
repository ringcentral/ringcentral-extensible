import Participants from './Participants';
import Invitees from './Invitees';
import SessionResource from '../../../../../../definitions/SessionResource';
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
   * Returns a historical webinar Session by ID.
   * HTTP Method: get
   * Endpoint: /webinar/history/v1/webinars/{webinarId}/sessions/{sessionId}
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<SessionResource> {
    if (this.sessionId === null) {
      throw new Error('sessionId must be specified.');
    }
    const r = await this.rc.get<SessionResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  invitees(inviteeId: (string | null) = null): Invitees {
    return new Invitees(this, inviteeId);
  }

  participants(): Participants {
    return new Participants(this);
  }
}
export default Index;
