import {RestRequestConfig} from '../../../../../Rest';
import {
  UserActiveCallsResponse,
  ListExtensionActiveCallsParameters,
} from '../../../../../definitions';
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
    return `${this.parent.path()}/active-calls`;
  }

  /**
   * Operation: Get User Active Calls
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls
   */
  async get(
    queryParams?: ListExtensionActiveCallsParameters,
    config?: RestRequestConfig
  ): Promise<UserActiveCallsResponse> {
    const r = await this.rc.get<UserActiveCallsResponse>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }
}

export default Index;
