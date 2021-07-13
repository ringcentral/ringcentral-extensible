import {RestRequestConfig} from '../../../../../Rest';
import {UserEmergencyLocationList} from '../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/emergency-locations`;
  }
  /**
   * Returns a list of emergency response locations available for the current user extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/emergency-locations
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  async get(
    restRequestConfig?: RestRequestConfig
  ): Promise<UserEmergencyLocationList> {
    const r = await this.rc.get<UserEmergencyLocationList>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
