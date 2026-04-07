/**
 * Result breakdown by company hours
 */
interface CallsByCompanyHoursBreakdown {
  /**
   * Value for BusinessHours company hours
   * Required
   * Format: double
   */
  businessHours?: number;

  /**
   * Value for AfterHours company hours
   * Required
   * Format: double
   */
  afterHours?: number;
}

export default CallsByCompanyHoursBreakdown;
