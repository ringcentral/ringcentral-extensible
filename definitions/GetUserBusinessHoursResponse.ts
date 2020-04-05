import ScheduleInfoUserBusinessHours from './ScheduleInfoUserBusinessHours'

class GetUserBusinessHoursResponse
{
    /**
     * Canonical URI of a business-hours resource
     */
    uri?: string

    /**
     * Schedule when an answering rule is applied
     */
    schedule?: ScheduleInfoUserBusinessHours
}

export default GetUserBusinessHoursResponse