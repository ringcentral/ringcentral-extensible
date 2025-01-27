import BulkOperationExtensionReference from "./BulkOperationExtensionReference.js";
import ApiErrorWithParameter from "./ApiErrorWithParameter.js";

interface BulkAddDevicesResponseResults {
  /**
   * Indicates if the provisioning operation was successful for this item, always `false` in this model
   */
  successful?: boolean;

  /**
   * Internal identifier of the created device
   * Example: 787878
   */
  id?: string;

  /** */
  extension?: BulkOperationExtensionReference;

  /**
   * Phone number in e.164 format (with '+' prefix)
   * Example: +16501234567
   */
  phoneNumber?: string;

  /** */
  errors?: ApiErrorWithParameter[];
}

export default BulkAddDevicesResponseResults;
