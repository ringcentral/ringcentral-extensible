import {RestRequestConfig} from '../../../../../Rest';
import {
  GetUserBusinessHoursResponse,
  UserBusinessHoursUpdateRequest,
  UserBusinessHoursUpdateResponse,
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
   * Returns the user business hours schedule. Business hours (and After hours - all the remaining time) schedules are commonly used for setting call handling rules - `business-hours-rule` and `after-hours-rule` correspondingly. **Please note:** If the user business hours are set to 'Custom hours' then a particular schedule is returned; however if set to '24 hours/7 days a week' the schedule will be empty.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/business-hours
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  async get(
    restRequestConfig?: RestRequestConfig
  ): Promise<GetUserBusinessHoursResponse> {
    const r = await this.rc.get<GetUserBusinessHoursResponse>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates the user business hours schedule.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/business-hours
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: EditUserAnsweringRules
   */
  async put(
    userBusinessHoursUpdateRequest: UserBusinessHoursUpdateRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<UserBusinessHoursUpdateResponse> {
    const r = await this.rc.put<UserBusinessHoursUpdateResponse>(
      this.path(),
      userBusinessHoursUpdateRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}

export default Index;
