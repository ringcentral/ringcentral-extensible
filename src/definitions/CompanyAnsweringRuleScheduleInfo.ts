import { CompanyAnsweringRuleWeeklyScheduleInfoRequest, RangesInfo } from '.'

class CompanyAnsweringRuleScheduleInfo
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
   * Reference to Business Hours or After Hours schedule = ['BusinessHours', 'AfterHours']
   */
  ref?: ('BusinessHours' | 'AfterHours')
}

export default CompanyAnsweringRuleScheduleInfo
