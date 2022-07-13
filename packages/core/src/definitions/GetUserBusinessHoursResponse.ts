import ScheduleInfoUserBusinessHours from './ScheduleInfoUserBusinessHours';

interface GetUserBusinessHoursResponse {
  /**
   * Canonical URI of a business-hours resource
   */
  uri?: string;

  /**
   */
  schedule?: ScheduleInfoUserBusinessHours;
}

export default GetUserBusinessHoursResponse;
