import CompanyAnsweringRuleWeeklyScheduleInfoRequest from './CompanyAnsweringRuleWeeklyScheduleInfoRequest'
import RangesInfo from './RangesInfo'

class CompanyAnsweringRuleScheduleInfoRequest
{
    /**
     * Weekly schedule. If specified, ranges cannot be specified
     */
    weeklyRanges?: CompanyAnsweringRuleWeeklyScheduleInfoRequest

    /**
     * Specific data ranges. If specified, weeklyRanges cannot be specified
     */
    ranges?: RangesInfo[]

    /**
     * Reference to Business Hours or After Hours schedule
     * Enum: BusinessHours, AfterHours
     */
    ref?: string
}

export default CompanyAnsweringRuleScheduleInfoRequest