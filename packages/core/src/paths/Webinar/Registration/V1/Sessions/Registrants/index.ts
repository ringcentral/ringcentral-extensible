import type RegistrantModelWithQuestionnaire from '../../../../../../definitions/RegistrantModelWithQuestionnaire';
import type RcwRegGetRegistrantParameters from '../../../../../../definitions/RcwRegGetRegistrantParameters';
import type RegistrantModelResponsePostWithQuestionnaire from '../../../../../../definitions/RegistrantModelResponsePostWithQuestionnaire';
import type RegistrantBaseModelWithQuestionnaire from '../../../../../../definitions/RegistrantBaseModelWithQuestionnaire';
import type RegistrantListResource from '../../../../../../definitions/RegistrantListResource';
import type RcwRegListRegistrantsParameters from '../../../../../../definitions/RcwRegListRegistrantsParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public registrantId: string | null;

  public constructor(_parent: ParentInterface, registrantId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.registrantId = registrantId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.registrantId !== null) {
      return `${this._parent.path()}/registrants/${this.registrantId}`;
    }
    return `${this._parent.path()}/registrants`;
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
  public async list(
    queryParams?: RcwRegListRegistrantsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<RegistrantListResource> {
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
  public async post(
    registrantBaseModelWithQuestionnaire: RegistrantBaseModelWithQuestionnaire,
    restRequestConfig?: RestRequestConfig,
  ): Promise<RegistrantModelResponsePostWithQuestionnaire> {
    const r = await this.rc.post<RegistrantModelResponsePostWithQuestionnaire>(
      this.path(false),
      registrantBaseModelWithQuestionnaire,
      undefined,
      restRequestConfig,
    );
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
  public async get(
    queryParams?: RcwRegGetRegistrantParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<RegistrantModelWithQuestionnaire> {
    if (this.registrantId === null) {
      throw new Error('registrantId must be specified.');
    }
    const r = await this.rc.get<RegistrantModelWithQuestionnaire>(this.path(), queryParams, restRequestConfig);
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
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.registrantId === null) {
      throw new Error('registrantId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
