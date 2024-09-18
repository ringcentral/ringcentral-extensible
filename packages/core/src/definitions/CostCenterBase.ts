interface CostCenterBase {
  /**
   * Internal identifier of a cost center
   * Format: int64
   * Example: 981086004
   */
  id?: number;

  /**
   * Cost Center name
   * Example: My Cost Center
   */
  name?: string;

  /**
   * Billing code associated with a cost center
   * Example: BC 101
   */
  billingCode?: string;
}

export default CostCenterBase;
