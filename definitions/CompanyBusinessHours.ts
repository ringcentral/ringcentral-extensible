import CompanyBusinessHoursScheduleInfo from './CompanyBusinessHoursScheduleInfo'

class CompanyBusinessHours
{
    /// <summary>
    /// Canonical URI of a business-hours resource
    /// </summary>
    uri: string

    /// <summary>
    /// Schedule when an answering rule is applied
    /// </summary>
    schedule: CompanyBusinessHoursScheduleInfo
}

export default CompanyBusinessHours