import Check from './Check';
import type AuthProfileResource from '../../../../../definitions/AuthProfileResource';
import type ReadAuthorizationProfileParameters from '../../../../../definitions/ReadAuthorizationProfileParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

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
    const r = await this.rc.get<AuthProfileResource>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }

  public check(): Check {
    return new Check(this);
  }
}
export default Index;
