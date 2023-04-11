import Sessions from './Sessions';
import WebinarResource from '../../../../../definitions/WebinarResource';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  webinarId: string | null;

  constructor(parent: ParentInterface, webinarId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.webinarId = webinarId;
  }

  path(withParameter = true): string {
    if (withParameter && this.webinarId !== null) {
      return `${this.parent.path()}/webinars/${this.webinarId}`;
    }
    return `${this.parent.path()}/webinars`;
  }

  /**
   * Returns a historical webinar information by ID.
   * HTTP Method: get
   * Endpoint: /webinar/history/v1/webinars/{webinarId}
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<WebinarResource> {
    if (this.webinarId === null) {
      throw new Error('webinarId must be specified.');
    }
    const r = await this.rc.get<WebinarResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  sessions(sessionId: (string | null) = null): Sessions {
    return new Sessions(this, sessionId);
  }
}
export default Index;
