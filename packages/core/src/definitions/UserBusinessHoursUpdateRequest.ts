import type UserBusinessHoursScheduleInfo from "./UserBusinessHoursScheduleInfo";

interface UserBusinessHoursUpdateRequest {
  /**
   * Required
   */
  schedule?: UserBusinessHoursScheduleInfo;
}

export default UserBusinessHoursUpdateRequest;
