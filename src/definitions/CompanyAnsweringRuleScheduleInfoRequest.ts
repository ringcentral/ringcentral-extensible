import { CompanyAnsweringRuleWeeklyScheduleInfoRequest, RangesInfo } from '.'

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
   */
  ref?: ('BusinessHours' | 'AfterHours')
}

export default CompanyAnsweringRuleScheduleInfoRequest
