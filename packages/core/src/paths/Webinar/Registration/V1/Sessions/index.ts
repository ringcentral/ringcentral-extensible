import Registrants from './Registrants';
import RegSessionModel from '../../../../../definitions/RegSessionModel';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

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
   * Returns a registration Session information by ID.
 *
 * A caller must be an authorized user: either a host of the webinar or an IT Admin:
 * a user from host's account with "WebinarSettings" permission.
 *
   * HTTP Method: get
   * Endpoint: /webinar/registration/v1/sessions/{sessionId}
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<RegSessionModel> {
    if (this.sessionId === null) {
      throw new Error('sessionId must be specified.');
    }
    const r = await this.rc.get<RegSessionModel>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates a Session by ID.
 *
 * This is a PARTIAL update (PATCH), client may call it providing only attributes which are to be changed.
 *
 * A caller must be an authorized user: either a host of the webinar or an IT Admin:
 * a user from host's account with "WebinarSettings" permission.
 *
 * If a session record with given ID doesn't exist on Registration Service side the API should return HTTP 404.
 *
   * HTTP Method: patch
   * Endpoint: /webinar/registration/v1/sessions/{sessionId}
   * Rate Limit Group: Heavy
   * App Permission: EditWebinars
   */
  async patch(regSessionModel: RegSessionModel, restRequestConfig?: RestRequestConfig): Promise<RegSessionModel> {
    if (this.sessionId === null) {
      throw new Error('sessionId must be specified.');
    }
    const r = await this.rc.patch<RegSessionModel>(this.path(), regSessionModel, undefined, restRequestConfig);
    return r.data;
  }

  registrants(registrantId: (string | null) = null): Registrants {
    return new Registrants(this, registrantId);
  }
}
export default Index;
