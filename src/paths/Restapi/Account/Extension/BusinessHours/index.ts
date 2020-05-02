import {
  GetUserBusinessHoursResponse,
  UserBusinessHoursUpdateResponse,
  UserBusinessHoursUpdateRequest,
} from '../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../..';

class BusinessHours {
  rc: RestClient;
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
  async get(): Promise<GetUserBusinessHoursResponse> {
    const r = await this.rc.get<GetUserBusinessHoursResponse>(this.path());
    return r.data;
  }

  /**
   * Operation: Update User Business Hours
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours
   */
  async put(
    userBusinessHoursUpdateRequest: UserBusinessHoursUpdateRequest
  ): Promise<UserBusinessHoursUpdateResponse> {
    const r = await this.rc.put<UserBusinessHoursUpdateResponse>(
      this.path(),
      userBusinessHoursUpdateRequest
    );
    return r.data;
  }
}

export default BusinessHours;
