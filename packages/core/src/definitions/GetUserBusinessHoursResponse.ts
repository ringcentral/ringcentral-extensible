import ScheduleInfoUserBusinessHours from './ScheduleInfoUserBusinessHours';

class GetUserBusinessHoursResponse {
  /**
   * Canonical URI of a business-hours resource
   */
  uri?: string;

  /**
   */
  schedule?: ScheduleInfoUserBusinessHours;
}

export default GetUserBusinessHoursResponse;
