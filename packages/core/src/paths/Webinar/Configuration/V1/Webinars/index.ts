import Sessions from './Sessions';
import type WebinarBaseModel from '../../../../../definitions/WebinarBaseModel';
import type WcsWebinarResource from '../../../../../definitions/WcsWebinarResource';
import type WebinarCreationRequest from '../../../../../definitions/WebinarCreationRequest';
import type WebinarListResource from '../../../../../definitions/WebinarListResource';
import type RcwConfigListWebinarsParameters from '../../../../../definitions/RcwConfigListWebinarsParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public webinarId: string | null;

  public constructor(_parent: ParentInterface, webinarId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.webinarId = webinarId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.webinarId !== null) {
      return `${this._parent.path()}/webinars/${this.webinarId}`;
    }
    return `${this._parent.path()}/webinars`;
  }
  /**
   * Returns the list of Webinars hosted by a current authorized user sorted by 'scheduledStartTime' or 'creationTime' in the ascending order.
   *
   * HTTP Method: get
   * Endpoint: /webinar/configuration/v1/webinars
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  public async list(
    queryParams?: RcwConfigListWebinarsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<WebinarListResource> {
    const r = await this.rc.get<WebinarListResource>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a new webinar.
   *
   * If "host" parameter is NOT passed then the current authorized user will become a Host.
   * If "host" parameter is passed then the caller must be a company administrator and have "WebinarSettings" permission.
   * "host.linkedUser.accountId" must be the same as authorized user's account ID.
   *
   * The webinar settings which are not mandated at account level or are unlocked can be
   * specified. All other settings are defaulted according to account policy.
   *
   * HTTP Method: post
   * Endpoint: /webinar/configuration/v1/webinars
   * Rate Limit Group: Heavy
   * App Permission: EditWebinars
   */
  public async post(
    webinarCreationRequest: WebinarCreationRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<WcsWebinarResource> {
    const r = await this.rc.post<WcsWebinarResource>(
      this.path(false),
      webinarCreationRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns a Webinar information by ID.
   * Some webinar settings are returned basing on webinar-level overrides, other - from default settings defined at account level.
   *
   * HTTP Method: get
   * Endpoint: /webinar/configuration/v1/webinars/{webinarId}
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<WcsWebinarResource> {
    if (this.webinarId === null) {
      throw new Error('webinarId must be specified.');
    }
    const r = await this.rc.get<WcsWebinarResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes a Webinar by ID. All child objects (Sessions, Invitees) will be also deleted.
   * It is disallowed to delete a Webinar which has at least one Session in 'Active' or 'Finished' state.
   *
   * HTTP Method: delete
   * Endpoint: /webinar/configuration/v1/webinars/{webinarId}
   * Rate Limit Group: Heavy
   * App Permission: EditWebinars
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.webinarId === null) {
      throw new Error('webinarId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates a Webinar. The payload may contain just changed fields of a Webinar resource (it is a partial update):
   * - host cannot be changed and host user information cannot be updated;
   * - only the settings which are not mandated at account level or are unlocked can be
   * changed;
   * - in order to reset a webinar password it should be passed as an empty string;
   * - "registrationStatus" cannot be changed.
   *
   * HTTP Method: patch
   * Endpoint: /webinar/configuration/v1/webinars/{webinarId}
   * Rate Limit Group: Heavy
   * App Permission: EditWebinars
   */
  public async patch(
    webinarBaseModel: WebinarBaseModel,
    restRequestConfig?: RestRequestConfig,
  ): Promise<WcsWebinarResource> {
    if (this.webinarId === null) {
      throw new Error('webinarId must be specified.');
    }
    const r = await this.rc.patch<WcsWebinarResource>(this.path(), webinarBaseModel, undefined, restRequestConfig);
    return r.data;
  }

  public sessions(sessionId: string | null = null): Sessions {
    return new Sessions(this, sessionId);
  }
}
export default Index;
