import BulkOperationExtensionReference from './BulkOperationExtensionReference';
import BulkAddDevicesItemEmergency from './BulkAddDevicesItemEmergency';
import BulkAddDevicesItemPhoneInfo from './BulkAddDevicesItemPhoneInfo';

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
   * Only "address" is supported at the moment
   * Required
   */
  emergency?: BulkAddDevicesItemEmergency;

  /**
   * To be used to assign a number by id
   * Required
   */
  phoneInfo?: BulkAddDevicesItemPhoneInfo;
}

export default BulkAddDevicesItem;
