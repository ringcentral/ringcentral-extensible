import Check from './Check';
import AuthProfileResource from '../../../../../definitions/AuthProfileResource';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/authz-profile`;
  }

  /**
   * Returns a list of user permissions granted at authorization procedure.
 * Please note: Some permissions may be restricted by extension type.
 *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/authz-profile
   * Rate Limit Group: Medium
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<AuthProfileResource> {
    const r = await this.rc.get<AuthProfileResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  check(): Check {
    return new Check(this);
  }
}
export default Index;
