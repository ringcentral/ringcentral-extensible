import Check from "./Check/index.js";
import AuthProfileResource from "../../../../../definitions/AuthProfileResource.js";
import ReadAuthorizationProfileParameters from "../../../../../definitions/ReadAuthorizationProfileParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/authz-profile`;
  }
  /**
   * Returns a list of user permissions granted at authorization procedure.
   * Please note: Some permissions may be restricted by extension type.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/authz-profile
   * Rate Limit Group: Medium
   */
  public async get(
    queryParams?: ReadAuthorizationProfileParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AuthProfileResource> {
    const r = await this.rc.get<AuthProfileResource>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  public check(): Check {
    return new Check(this);
  }
}
export default Index;
