import ScheduleInfoUserBusinessHours from "./ScheduleInfoUserBusinessHours.js";

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
