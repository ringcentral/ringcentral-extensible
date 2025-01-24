interface BillingStatementFees {
  /** */
  description?: string;

  /**
   * Format: double
   */
  amount?: number;

  /**
   * Format: double
   */
  freeServiceCredit?: number;
}

export default BillingStatementFees;
