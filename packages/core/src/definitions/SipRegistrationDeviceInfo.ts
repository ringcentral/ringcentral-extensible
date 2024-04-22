import type DeviceModelInfo from './DeviceModelInfo';
import type DeviceExtensionInfo from './DeviceExtensionInfo';
import type DeviceEmergencyServiceAddressResourceDefault from './DeviceEmergencyServiceAddressResourceDefault';
import type SipRegistrationDeviceEmergencyInfo from './SipRegistrationDeviceEmergencyInfo';
import type ShippingInfo from './ShippingInfo';
import type DevicePhoneLinesInfo from './DevicePhoneLinesInfo';
import type DeviceSiteInfo from './DeviceSiteInfo';

interface SipRegistrationDeviceInfo {
  /**
   * Canonical URI of the resource
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a device
   */
  id?: string;

  /**
   * Device type
   */
  type?: 'HardPhone' | 'SoftPhone' | 'OtherPhone' | 'Paging' | 'WebPhone' | 'Room';

  /**
   * Device identification number (SKU, Stock Keeping Unit) in the format
   *  TP-ID [-AT-AC], where TP is device type (HP for RC desk phones, DV for all
   *  other devices including soft phones); ID - device model ID; AT - add-on type
   *  ID; AC - add-on count (if any). For example 'HP-56-2-2'
   */
  sku?: string;

  /**
   */
  status?: 'Online' | 'Offline';

  /**
   * Device name. Mandatory if ordering  SoftPhone or OtherPhone.
   *  Optional for HardPhone. If not specified for HardPhone, then device  model  name
   *  is used as device  name
   */
  name?: string;

  /**
   * Serial number for HardPhone (is returned only when the phone
   *  is shipped and provisioned); endpoint_id for Softphone and mobile applications
   */
  serial?: string;

  /**
   * Computer name (for devices of `SoftPhone` type only)
   */
  computerName?: string;

  /**
   */
  model?: DeviceModelInfo;

  /**
   */
  extension?: DeviceExtensionInfo;

  /**
   */
  emergencyServiceAddress?: DeviceEmergencyServiceAddressResourceDefault;

  /**
   */
  emergency?: SipRegistrationDeviceEmergencyInfo;

  /**
   */
  shipping?: ShippingInfo;

  /**
   * Phone lines information
   */
  phoneLines?: DevicePhoneLinesInfo[];

  /**
   * Box billing identifier of a device. Applicable only for devices of `HardPhone` type.
   * Format: int64
   */
  boxBillingId?: number;

  /**
   * Supported only for devices assigned to Limited extensions. If true, enables users to log in to this phone as a common phone.
   */
  useAsCommonPhone?: boolean;

  /**
   * Pooling type of device:
   *  - `Host` - device with a standalone paid phone line which can be linked to soft phone client instance;
   *  - `Guest` - device with a linked phone line;
   *  - `None` - device without a phone line or with a specific line (free, BLA, etc.)
   */
  linePooling?: 'Host' | 'Guest' | 'None';

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
   * Timestamp of receiving last location report in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   *  format including timezone, for example *2016-03-10T18:07:52.534Z
   * Format: date-time
   */
  lastLocationReportTime?: string;
}

export default SipRegistrationDeviceInfo;
