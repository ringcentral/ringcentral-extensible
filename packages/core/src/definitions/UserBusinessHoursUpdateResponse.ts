import UserBusinessHoursScheduleInfo from './UserBusinessHoursScheduleInfo';

class UserBusinessHoursUpdateResponse {
  /**
   * Canonical URI of a business-hours resource
   */
  uri?: string;

  /**
   */
  schedule?: UserBusinessHoursScheduleInfo;
}

export default UserBusinessHoursUpdateResponse;
