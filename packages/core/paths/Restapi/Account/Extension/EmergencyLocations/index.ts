import {RestRequestConfig} from '../../../../../Rest';
import {UserEmergencyLocationList} from '../../../../../definitions';
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
    return `${this.parent.path()}/emergency-locations`;
  }

  /**
   * Operation: Get User Emergency Location List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/emergency-locations
   */
  async get(config?: RestRequestConfig): Promise<UserEmergencyLocationList> {
    const r = await this.rc.get<UserEmergencyLocationList>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
