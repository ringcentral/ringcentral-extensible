import WcsSessionGlobalListResource from "../../../../../../definitions/WcsSessionGlobalListResource.js";
import RcwConfigListAllCompanySessionsParameters from "../../../../../../definitions/RcwConfigListAllCompanySessionsParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/sessions`;
  }
  /**
   * Returns the list of Webinar Sessions hosted by all company users or particular user(s) sorted by
   * 'scheduledStartTime' or 'creationTime' (if 'scheduledStartTime' is not set) in the ascending ordered.
   * The user must have "WebinarSettings" permission granted otherwise the API returns HTTP 403.
   *
   * HTTP Method: get
   * Endpoint: /webinar/configuration/v1/company/sessions
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  public async get(
    queryParams?: RcwConfigListAllCompanySessionsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<WcsSessionGlobalListResource> {
    const r = await this.rc.get<WcsSessionGlobalListResource>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
