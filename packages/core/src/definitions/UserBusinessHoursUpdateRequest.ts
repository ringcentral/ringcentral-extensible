import UserBusinessHoursScheduleInfo from "./UserBusinessHoursScheduleInfo.js";

interface UserBusinessHoursUpdateRequest {
  /**
   * Required
   */
  schedule?: UserBusinessHoursScheduleInfo;
}

export default UserBusinessHoursUpdateRequest;
