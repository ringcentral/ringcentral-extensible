import type BulkOperationExtensionReference from './BulkOperationExtensionReference';
import type BulkAddDevicesItemEmergency from './BulkAddDevicesItemEmergency';
import type BulkAddDevicesItemPhoneInfo from './BulkAddDevicesItemPhoneInfo';

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
  type?: 'OtherPhone' | 'WebRTC';

  /**
   * Only "address" is supported at the moment
   * Required
   */
  emergency?: BulkAddDevicesItemEmergency;

  /**
   * To be used to assign a number by ID
   * Required
   */
  phoneInfo?: BulkAddDevicesItemPhoneInfo;
}

export default BulkAddDevicesItem;
