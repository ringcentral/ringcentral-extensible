import type ModelInfo from './ModelInfo';
import type ExtensionInfoIntId from './ExtensionInfoIntId';
import type DeviceEmergencyInfo from './DeviceEmergencyInfo';
import type EmergencyServiceAddressResource from './EmergencyServiceAddressResource';
import type PhoneLinesInfo from './PhoneLinesInfo';
import type ShippingInfo from './ShippingInfo';
import type DeviceSiteInfo from './DeviceSiteInfo';
import type BillingStatementInfo from './BillingStatementInfo';

interface DeviceResource {
  /**
   * Internal identifier of a device
   */
  id?: string;

  /**
   * Canonical URI of a device
   * Format: uri
   */
  uri?: string;

  /**
   * Device identification number (SKU, Stock Keeping Unit) in the format
   *  TP-ID [-AT-AC], where TP is device type (HP for RC desk phones, DV for all
   *  other devices including soft phones); ID - device model ID; AT - add-on type
   *  ID; AC - add-on count (if any). For example 'HP-56-2-2'
   */
  sku?: string;

  /**
   * Device type
   * Default: HardPhone
   */
  type?: 'BLA' | 'SoftPhone' | 'OtherPhone' | 'HardPhone' | 'WebPhone' | 'Paging' | 'Room' | 'WebRTC';

  /**
   * Device name. Mandatory if ordering SoftPhone or OtherPhone.
   *  Optional for HardPhone. If not specified for HardPhone, then
   *  a device model is used as a device name
   */
  name?: string;

  /**
   * Serial number for HardPhone (is returned only when the phone
   *  is shipped and provisioned); endpoint ID for SoftPhone and
   *  mobile applications
   */
  serial?: string;

  /**
   * Device status
   */
  status?: 'Offline' | 'Online';

  /**
   * Computer name (for devices of `SoftPhone` type only)
   */
  computerName?: string;

  /**
   */
  model?: ModelInfo;

  /**
   */
  extension?: ExtensionInfoIntId;

  /**
   */
  emergency?: DeviceEmergencyInfo;

  /**
   */
  emergencyServiceAddress?: EmergencyServiceAddressResource;

  /**
   * Phone lines information
   */
  phoneLines?: PhoneLinesInfo[];

  /**
   */
  shipping?: ShippingInfo;

  /**
   * Box billing identifier of a device. Applicable only for HardPhones.
   *  It is an alternative way to identify the device to be ordered. Either
   *  model structure, or boxBillingId  must be specified for HardPhone
   * Format: int64
   */
  boxBillingId?: number;

  /**
   * Supported only for devices assigned to Limited extensions.
   *  If true, enables users to log in to this phone as a common phone.
   */
  useAsCommonPhone?: boolean;

  /**
   * This flag indicates whether this device is used for hot desking or not
   */
  hotDeskDevice?: boolean;

  /**
   * Network location status. `true` if the device is located in
   *  the configured corporate network (On-Net); `false` for Off-Net location.
   *  Parameter is not returned if `EmergencyAddressAutoUpdate` feature is not
   *  enabled for the account/user, or if device network location is not determined
   */
  inCompanyNet?: boolean;

  /**
   */
  site?: DeviceSiteInfo;

  /**
   * Date/time of receiving last location report in
   *  [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   *  format including timezone, for example *2016-03-10T18:07:52.534Z
   * Format: date-time
   */
  lastLocationReportTime?: string;

  /**
   * Pooling type of device:
   *  - Host - a device with standalone paid phone line which can be linked to a soft client instance
   *  - Guest - a device with a linked phone line
   *  - None - a device without a phone line or with specific line (free, BLA, etc.)
   */
  linePooling?: 'Host' | 'Guest' | 'None';

  /**
   */
  billingStatement?: BillingStatementInfo;
}

export default DeviceResource;
