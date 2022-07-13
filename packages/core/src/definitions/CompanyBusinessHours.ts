import CompanyBusinessHoursScheduleInfo from './CompanyBusinessHoursScheduleInfo';

interface CompanyBusinessHours {
  /**
   * Canonical URI of a business-hours resource
   */
  uri?: string;

  /**
   */
  schedule?: CompanyBusinessHoursScheduleInfo;
}

export default CompanyBusinessHours;
