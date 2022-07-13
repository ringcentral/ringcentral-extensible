import UserBusinessHoursScheduleInfo from './UserBusinessHoursScheduleInfo';

interface UserBusinessHoursUpdateResponse {
  /**
   * Canonical URI of a business-hours resource
   */
  uri?: string;

  /**
   */
  schedule?: UserBusinessHoursScheduleInfo;
}

export default UserBusinessHoursUpdateResponse;
