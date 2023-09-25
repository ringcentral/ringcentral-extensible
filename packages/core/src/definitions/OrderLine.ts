/**
 * Particular license or device sku to be ordered (base)
 */
interface OrderLine {
  /**
   * The number of items of this kind
   * Required
   * Minimum: 1
   * Format: int32
   * Example: 15
   */
  quantity?: number;

  /**
   * Required
   * Example: LC_HD_529
   */
  skuId?: string;

  /**
   * The cost center ID if necessary
   * Example: 224149
   */
  costCenterId?: string;
}

export default OrderLine;
