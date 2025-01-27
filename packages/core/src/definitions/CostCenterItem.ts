import TaxLocation from "./TaxLocation.js";

interface CostCenterItem {
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

  /**
   * Required
   */
  taxLocation?: TaxLocation;

  /**
   * Internal identifier of a parent cost center
   * Format: int64
   * Example: 45878
   */
  parentId?: number;
}

export default CostCenterItem;
