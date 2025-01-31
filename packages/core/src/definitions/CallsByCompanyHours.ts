import CallsByCompanyHoursBreakdown from "./CallsByCompanyHoursBreakdown.js";

/**
 * Data for calls with breakdown by company hours (BusinessHours, AfterHours)
 */
interface CallsByCompanyHours {
  /**
   * Unit of the result value
   * Required
   */
  valueType?: "Percent" | "Seconds" | "Instances";

  /**
   * Required
   */
  values?: CallsByCompanyHoursBreakdown;
}

export default CallsByCompanyHours;
