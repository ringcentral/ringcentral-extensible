import type BulkOperationExtensionReference from "./BulkOperationExtensionReference";

interface BulkAddDevicesSuccessItem {
  /**
   * Indicates if the provisioning operation was successful for this item, always `true` in this model
   * Required
   * Example: true
   */
  successful?: boolean;

  /**
   * Internal identifier of the created device
   * Required
   * Example: 787878
   */
  id?: string;

  /**
   * Required
   */
  extension?: BulkOperationExtensionReference;

  /**
   * Phone number in e.164 format (with '+' prefix)
   * Required
   * Example: +16501234567
   */
  phoneNumber?: string;
}

export default BulkAddDevicesSuccessItem;
