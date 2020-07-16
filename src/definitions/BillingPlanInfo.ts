class BillingPlanInfo {
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
  durationUnit?: 'Month' | 'Day';

  /**
   * Number of duration units
   */
  duration?: number;

  /**
   * Billing plan type
   */
  type?: 'Initial' | 'Regular' | 'Suspended' | 'Trial' | 'TrialNoCC' | 'Free';

  /**
   * Included digital lines count
   */
  includedPhoneLines?: number;
}

export default BillingPlanInfo;
