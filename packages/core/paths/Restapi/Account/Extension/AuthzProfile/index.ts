import Check from './Check';
import {RestRequestConfig} from '../../../../../Rest';
import {AuthProfileResource} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/authz-profile`;
  }
  /**
   * Returns a list of user permissions granted at authorization procedure. Please note: Some permissions may be restricted by extension type.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/authz-profile
   * Rate Limit Group: Medium
   */
  async get(
    restRequestConfig?: RestRequestConfig
  ): Promise<AuthProfileResource> {
    const r = await this.rc.get<AuthProfileResource>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  check(): Check {
    return new Check(this);
  }
}
export default Index;
