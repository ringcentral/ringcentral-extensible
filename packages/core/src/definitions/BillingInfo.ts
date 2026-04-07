/**
 * Billing information related to the call. Returned for 'Detailed' view only
 */
interface BillingInfo {
  /**
   * Cost per minute, paid and already included in your RingCentral service plan.
   *  For example International Calls
   * Format: double
   */
  costIncluded?: number;

  /**
   * Cost per minute, paid and not included in your RingCentral service plan
   * Format: double
   */
  costPurchased?: number;
}

export default BillingInfo;
