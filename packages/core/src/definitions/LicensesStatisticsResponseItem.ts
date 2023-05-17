/**
 * Particular license or device sku to be ordered (base)
*/
interface LicensesStatisticsResponseItem {
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

  /**
   * Indicates if this license is assigned
   * Required
   */
  assigned?: boolean;
}

export default LicensesStatisticsResponseItem;
