interface BillingStatementCharges {
  /** */
  description?: string;

  /**
   * Format: double
   */
  amount?: number;

  /** */
  feature?: string;

  /**
   * Format: double
   */
  freeServiceCredit?: number;
}

export default BillingStatementCharges;
