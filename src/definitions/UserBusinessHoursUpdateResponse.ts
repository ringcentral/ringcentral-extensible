import UserBusinessHoursScheduleInfo from './UserBusinessHoursScheduleInfo'

class UserBusinessHoursUpdateResponse
{
    /**
     * Canonical URI of a business-hours resource
     */
    uri?: string

    /**
     * Schedule when an answering rule is applied
     */
    schedule?: UserBusinessHoursScheduleInfo
}

export default UserBusinessHoursUpdateResponse