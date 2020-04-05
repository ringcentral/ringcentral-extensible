import CompanyAnsweringRuleWeeklyScheduleInfoRequest from './CompanyAnsweringRuleWeeklyScheduleInfoRequest'
import RangesInfo from './RangesInfo'

class CompanyAnsweringRuleScheduleInfo
{
    /// <summary>
    /// Weekly schedule. If specified, ranges cannot be specified
    /// </summary>
    weeklyRanges: CompanyAnsweringRuleWeeklyScheduleInfoRequest

    /// <summary>
    /// Specific data ranges. If specified, weeklyRanges cannot be specified
    /// </summary>
    ranges: RangesInfo[]

    /// <summary>
    /// Reference to Business Hours or After Hours schedule = ['BusinessHours', 'AfterHours']
    /// Enum: BusinessHours, AfterHours
    /// </summary>
    ref: string
}

export default CompanyAnsweringRuleScheduleInfo