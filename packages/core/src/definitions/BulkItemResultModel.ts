import type ApiError from "./ApiError";

interface BulkItemResultModel {
  /**
   * Indicates if this item was processed successfully during bulk operation.
   *  If false, `bulkItemErrors` attribute contains the list of errors
   * Required
   * Example: true
   */
  bulkItemSuccessful?: boolean;

  /**
   * The list of errors occurred during processing of particular item of bulk operation.
   *  Returned only if `bulkItemSuccessful` is false
   */
  bulkItemErrors?: ApiError[];
}

export default BulkItemResultModel;
