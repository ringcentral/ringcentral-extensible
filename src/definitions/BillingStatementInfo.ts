import {BillingStatementCharges, BillingStatementFees} from '.';

class BillingStatementInfo {
  /**
   * Currency code complying with [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) standard
   */
  currency?: string;

  /**
   */
  charges?: BillingStatementCharges[];

  /**
   */
  fees?: BillingStatementFees[];

  /**
   */
  totalCharges?: number;

  /**
   */
  totalFees?: number;

  /**
   */
  subtotal?: number;

  /**
   */
  totalFreeServiceCredit?: number;
}

export default BillingStatementInfo;
