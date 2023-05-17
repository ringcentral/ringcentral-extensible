import BulkOperationExtensionReference from './BulkOperationExtensionReference';

interface AddForwardedNumberRequestItem {
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

export default AddForwardedNumberRequestItem;
