import ApiError from './ApiError';
import BulkOperationExtensionReference from './BulkOperationExtensionReference';

interface AddForwardedNumberResponseItem {
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

  /**
   * Forwarded phone number ID. Returned only for successfully added numbers
   */
  id?: string;

  /**
   * Phone number in e.164 format (with '+' prefix)
   * Required
   * Example: +16501234567
   */
  phoneNumber?: string;

  /**
   */
  extension?: BulkOperationExtensionReference;
}

export default AddForwardedNumberResponseItem;
