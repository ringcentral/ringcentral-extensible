/**
 * Particular license or device sku to be ordered (base)
 */
interface OrderLineBase {
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
}

export default OrderLineBase;
