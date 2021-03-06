import {
  CompanyAnsweringRuleWeeklyScheduleInfoRequest,
  RangesInfo,
} from './index';

// Schedule when an answering rule should be applied
class CompanyAnsweringRuleScheduleInfo {
  /**
   */
  weeklyRanges?: CompanyAnsweringRuleWeeklyScheduleInfoRequest;

  /**
   * Specific data ranges. If specified, weeklyRanges cannot be specified
   */
  ranges?: RangesInfo[];

  /**
   * Reference to Business Hours or After Hours schedule = ['BusinessHours', 'AfterHours']
   */
  ref?: 'BusinessHours' | 'AfterHours';
}
export default CompanyAnsweringRuleScheduleInfo;
