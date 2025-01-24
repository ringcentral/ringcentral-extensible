import type UserBusinessHoursUpdateResponse from "../../../../../definitions/UserBusinessHoursUpdateResponse";
import type UserBusinessHoursUpdateRequest from "../../../../../definitions/UserBusinessHoursUpdateRequest";
import type GetUserBusinessHoursResponse from "../../../../../definitions/GetUserBusinessHoursResponse";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/business-hours`;
  }
  /**
   * Returns the user business hours schedule. Business hours (and After hours - all the remaining time) schedules are commonly used for setting call handling rules - `business-hours-rule` and `after-hours-rule` correspondingly. **Please note:** If the user business hours are set to 'Custom hours' then a particular schedule is returned; however if set to '24 hours/7 days a week' the schedule will be empty.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/business-hours
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetUserBusinessHoursResponse> {
    const r = await this.rc.get<GetUserBusinessHoursResponse>(
      this.path(),
      undefined,
      restRequestConfig,
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
  public async put(
    userBusinessHoursUpdateRequest: UserBusinessHoursUpdateRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<UserBusinessHoursUpdateResponse> {
    const r = await this.rc.put<UserBusinessHoursUpdateResponse>(
      this.path(),
      userBusinessHoursUpdateRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
