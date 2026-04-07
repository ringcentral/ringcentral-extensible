import BulkOperationExtensionReference from "./BulkOperationExtensionReference.js";
import BulkAddDevicesItemEmergency from "./BulkAddDevicesItemEmergency.js";
import BulkAddDevicesItemPhoneInfo from "./BulkAddDevicesItemPhoneInfo.js";

interface BulkAddDevicesItem {
    /**
   * Internal identifier of a cost center
   * Example: 224149
   */
  costCenterId?: string;

  /**
   * Required
   */
  extension?: BulkOperationExtensionReference;

  /**
   * Device type. Only "OtherPhone" and "WebRTC" device types are supported at the moment
   * Required
   */
  type?: ('OtherPhone' | 'WebRTC');

  /**
   * Required
   */
  emergency?: BulkAddDevicesItemEmergency;

  /**
   * Assign a specific phone number
   * Required
   */
  phoneInfo?: BulkAddDevicesItemPhoneInfo;

  /**
   * The option that indicates whether Contact Center Phone Line should be created or not
   */
  contactCenterPhoneLine?: boolean;
}

export default BulkAddDevicesItem;
