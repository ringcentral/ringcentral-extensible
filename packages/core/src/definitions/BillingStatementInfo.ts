import type BillingStatementCharges from './BillingStatementCharges';
import type BillingStatementFees from './BillingStatementFees';

/**
 * Billing information. Returned for device update request if `prestatement`
 * query parameter is set to 'true'
 *
 */
interface BillingStatementInfo {
  /**
   * Currency code complying with [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217)
   *  standard
   */
  currency?: string;

  /**
   */
  charges?: BillingStatementCharges[];

  /**
   */
  fees?: BillingStatementFees[];

  /**
   * Format: double
   */
  totalCharged?: number;

  /**
   * Format: double
   */
  totalCharges?: number;

  /**
   * Format: double
   */
  totalFees?: number;

  /**
   * Format: double
   */
  subtotal?: number;

  /**
   * Format: double
   */
  totalFreeServiceCredit?: number;
}

export default BillingStatementInfo;
