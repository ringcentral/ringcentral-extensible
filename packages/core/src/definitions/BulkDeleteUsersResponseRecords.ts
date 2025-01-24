import type ApiError from "./ApiError";

interface BulkDeleteUsersResponseRecords {
  /**
   * Internal identifier of an extension
   * Example: 1162820004
   */
  id?: string;

  /**
   * Indicates if this item was processed successfully during bulk operation.
   *  If false, `bulkItemErrors` attribute contains the list of errors
   * Example: true
   */
  bulkItemSuccessful?: boolean;

  /**
   * The list of errors occurred during processing of particular item of bulk operation.
   *  Returned only if `bulkItemSuccessful` is false
   */
  bulkItemErrors?: ApiError[];
}

export default BulkDeleteUsersResponseRecords;
