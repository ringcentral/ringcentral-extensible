import CompanyBusinessHoursScheduleInfo from "./CompanyBusinessHoursScheduleInfo.js";

interface CompanyBusinessHours {
  /**
   * Canonical URI of a business-hours resource
   * Format: uri
   */
  uri?: string;

  /** */
  schedule?: CompanyBusinessHoursScheduleInfo;
}

export default CompanyBusinessHours;
