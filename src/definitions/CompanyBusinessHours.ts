import CompanyBusinessHoursScheduleInfo from './CompanyBusinessHoursScheduleInfo'

class CompanyBusinessHours
{
  /**
   * Canonical URI of a business-hours resource
   */
  uri?: string

  /**
   * Schedule when an answering rule is applied
   */
  schedule?: CompanyBusinessHoursScheduleInfo
}

export default CompanyBusinessHours
