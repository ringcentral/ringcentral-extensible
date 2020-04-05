import ScheduleInfoUserBusinessHours from './ScheduleInfoUserBusinessHours'

class GetUserBusinessHoursResponse
{
    /// <summary>
    /// Canonical URI of a business-hours resource
    /// </summary>
    uri: string

    /// <summary>
    /// Schedule when an answering rule is applied
    /// </summary>
    schedule: ScheduleInfoUserBusinessHours
}

export default GetUserBusinessHoursResponse