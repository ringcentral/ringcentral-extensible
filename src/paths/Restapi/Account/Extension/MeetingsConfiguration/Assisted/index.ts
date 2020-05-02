import {AssistedUsersResource} from '../../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../../..';

class Assisted {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/assisted`;
  }

  /**
   * Operation: Get Assisted Users
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/meetings-configuration/assisted
   */
  async get(): Promise<AssistedUsersResource> {
    const r = await this.rc.get<AssistedUsersResource>(this.path());
    return r.data;
  }
}

export default Assisted;
