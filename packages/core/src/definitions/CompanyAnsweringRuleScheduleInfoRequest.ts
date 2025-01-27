import CompanyAnsweringRuleWeeklyScheduleInfoRequest from "./CompanyAnsweringRuleWeeklyScheduleInfoRequest.js";
import RangesInfo from "./RangesInfo.js";

/**
 * Schedule when an answering rule should be applied
 */
interface CompanyAnsweringRuleScheduleInfoRequest {
  /** */
  weeklyRanges?: CompanyAnsweringRuleWeeklyScheduleInfoRequest;

  /**
   * Specific data ranges. If specified, weeklyRanges cannot be specified
   */
  ranges?: RangesInfo[];

  /**
   * Reference to Business Hours or After Hours schedule
   */
  ref?: "BusinessHours" | "AfterHours";
}

export default CompanyAnsweringRuleScheduleInfoRequest;
