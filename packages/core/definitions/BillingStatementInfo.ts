import {BillingStatementCharges, BillingStatementFees} from './index';

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
  totalCharged?: number;

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
