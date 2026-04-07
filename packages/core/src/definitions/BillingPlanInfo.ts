/**
 * Information on account billing plan
 */
interface BillingPlanInfo {
  /**
   * Internal identifier of a billing plan
   */
  id?: string;

  /**
   * Billing plan name
   */
  name?: string;

  /**
   * Duration period
   */
  durationUnit?: "Day" | "Month" | "Year";

  /**
   * Number of duration units
   * Format: int32
   */
  duration?: number;

  /**
   * Billing plan type
   */
  type?: "Initial" | "Regular" | "Suspended" | "Trial" | "TrialNoCC" | "Free";

  /**
   * Included digital lines count
   * Format: int32
   */
  includedPhoneLines?: number;
}

export default BillingPlanInfo;
