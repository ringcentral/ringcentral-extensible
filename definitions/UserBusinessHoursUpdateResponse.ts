import UserBusinessHoursScheduleInfo from './UserBusinessHoursScheduleInfo'

class UserBusinessHoursUpdateResponse
{
    /// <summary>
    /// Canonical URI of a business-hours resource
    /// </summary>
    uri: string

    /// <summary>
    /// Schedule when an answering rule is applied
    /// </summary>
    schedule: UserBusinessHoursScheduleInfo
}

export default UserBusinessHoursUpdateResponse