import RegistrantModel from '../../../../../../definitions/RegistrantModel';
import RcwRegGetRegistrantParameters from '../../../../../../definitions/RcwRegGetRegistrantParameters';
import RegistrantModelResponsePost from '../../../../../../definitions/RegistrantModelResponsePost';
import RegistrantBaseModel from '../../../../../../definitions/RegistrantBaseModel';
import RegistrantListResource from '../../../../../../definitions/RegistrantListResource';
import RcwRegListRegistrantsParameters from '../../../../../../definitions/RcwRegListRegistrantsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  registrantId: string | null;

  constructor(parent: ParentInterface, registrantId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.registrantId = registrantId;
  }

  path(withParameter = true): string {
    if (withParameter && this.registrantId !== null) {
      return `${this.parent.path()}/registrants/${this.registrantId}`;
    }
    return `${this.parent.path()}/registrants`;
  }

  /**
   * Returns the list of Registrants ordered by "id" ascending.
 *
 * A caller must be an authorized user: either a host of the webinar or an IT Admin:
 * a user from host's account with "WebinarSettings" permission.
 *
   * HTTP Method: get
   * Endpoint: /webinar/registration/v1/sessions/{sessionId}/registrants
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  async list(queryParams?: RcwRegListRegistrantsParameters, restRequestConfig?: RestRequestConfig): Promise<RegistrantListResource> {
    const r = await this.rc.get<RegistrantListResource>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a new Registrant for a given session.
 *
 * Registration MUST be open for the session for this call to succeed (otherwise it should return HTTP 403).
 *
 * A caller must be an authorized user: either a host of the webinar or an IT Admin:
 * a user from host's account with "WebinarSettings" permission.
 *
   * HTTP Method: post
   * Endpoint: /webinar/registration/v1/sessions/{sessionId}/registrants
   * Rate Limit Group: Heavy
   * App Permission: EditWebinars
   */
  async post(registrantBaseModel: RegistrantBaseModel, restRequestConfig?: RestRequestConfig): Promise<RegistrantModelResponsePost> {
    const r = await this.rc.post<RegistrantModelResponsePost>(this.path(false), registrantBaseModel, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns a Registrant by ID.
 *
 * A caller must be an authorized user: either a host of the webinar or an IT Admin:
 * a user from host's account with "WebinarSettings" permission.
 *
   * HTTP Method: get
   * Endpoint: /webinar/registration/v1/sessions/{sessionId}/registrants/{registrantId}
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  async get(queryParams?: RcwRegGetRegistrantParameters, restRequestConfig?: RestRequestConfig): Promise<RegistrantModel> {
    if (this.registrantId === null) {
      throw new Error('registrantId must be specified.');
    }
    const r = await this.rc.get<RegistrantModel>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes a Registrant by ID.
 *
 * Session must not be in finished state (otherwise it should return HTTP 403).
 *
 * A caller must be an authorized user: either a host of the webinar or an IT Admin:
 * a user from host's account with "WebinarSettings" permission.
 *
   * HTTP Method: delete
   * Endpoint: /webinar/registration/v1/sessions/{sessionId}/registrants/{registrantId}
   * Rate Limit Group: Heavy
   * App Permission: EditWebinars
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.registrantId === null) {
      throw new Error('registrantId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
