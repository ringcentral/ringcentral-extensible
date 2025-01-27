import UserBusinessHoursScheduleInfo from "./UserBusinessHoursScheduleInfo.js";

interface UserBusinessHoursUpdateResponse {
  /**
   * Canonical URI of a business-hours resource
   * Format: uri
   */
  uri?: string;

  /** */
  schedule?: UserBusinessHoursScheduleInfo;
}

export default UserBusinessHoursUpdateResponse;
