import {RestRequestConfig} from '../../../../../Rest';
import {
  GetUserBusinessHoursResponse,
  UserBusinessHoursUpdateResponse,
  UserBusinessHoursUpdateRequest,
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
    return `${this.parent.path()}/business-hours`;
  }

  /**
   * Operation: Get User Business Hours
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours
   */
  async get(config?: RestRequestConfig): Promise<GetUserBusinessHoursResponse> {
    const r = await this.rc.get<GetUserBusinessHoursResponse>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update User Business Hours
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours
   */
  async put(
    userBusinessHoursUpdateRequest: UserBusinessHoursUpdateRequest,
    config?: RestRequestConfig
  ): Promise<UserBusinessHoursUpdateResponse> {
    const r = await this.rc.put<UserBusinessHoursUpdateResponse>(
      this.path(),
      userBusinessHoursUpdateRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
