import ScheduleInfoUserBusinessHours from "./ScheduleInfoUserBusinessHours";

interface GetUserBusinessHoursResponse {
  /**
   * Canonical URI of a business-hours resource
   * Format: uri
   */
  uri?: string;

  /** */
  schedule?: ScheduleInfoUserBusinessHours;
}

export default GetUserBusinessHoursResponse;
