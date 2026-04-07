import type AuthProfileCheckResource from "../../../../../../definitions/AuthProfileCheckResource.js";
import type CheckUserPermissionParameters from "../../../../../../definitions/CheckUserPermissionParameters.js";
import type {
  RingCentralInterface,
  ParentInterface,
  RestRequestConfig,
} from "../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/check`;
  }
  /**
   * Checks if a certain user permission is activated for a particular extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/authz-profile/check
   * Rate Limit Group: Light
   */
  public async get(
    queryParams?: CheckUserPermissionParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AuthProfileCheckResource> {
    const r = await this.rc.get<AuthProfileCheckResource>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
