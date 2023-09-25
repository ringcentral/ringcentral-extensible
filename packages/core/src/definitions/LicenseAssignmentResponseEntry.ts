import type ApiError from './ApiError';

interface LicenseAssignmentResponseEntry {
  /**
   * Indicates if an assignment operation was successful for this item
   * Required
   */
  bulkItemSuccess?: boolean;

  /**
   * SKU of a license
   * Required
   */
  skuId?: string;

  /**
   * Format: int64
   */
  extensionId?: number;

  /**
   * The list of errors occurred during processing of particular item of bulk operation.
   *  Returned only if `bulkItemSuccess` is false
   */
  bulkItemErrors?: ApiError[];
}

export default LicenseAssignmentResponseEntry;
