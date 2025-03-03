import ModelInfo from "./ModelInfo.js";
import ExtensionInfoIntId from "./ExtensionInfoIntId.js";
import DeviceEmergencyInfo from "./DeviceEmergencyInfo.js";
import EmergencyServiceAddressResource from "./EmergencyServiceAddressResource.js";
import PhoneLinesInfo from "./PhoneLinesInfo.js";
import ShippingInfo from "./ShippingInfo.js";
import DeviceSiteInfo from "./DeviceSiteInfo.js";
import BillingStatementInfo from "./BillingStatementInfo.js";

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
  type?:
    | "BLA"
    | "SoftPhone"
    | "OtherPhone"
    | "HardPhone"
    | "WebPhone"
    | "Paging"
    | "Room"
    | "WebRTC";

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
  status?: "Offline" | "Online";

  /**
   * Computer name (for devices of `SoftPhone` type only)
   */
  computerName?: string;

  /** */
  model?: ModelInfo;

  /** */
  extension?: ExtensionInfoIntId;

  /** */
  emergency?: DeviceEmergencyInfo;

  /** */
  emergencyServiceAddress?: EmergencyServiceAddressResource;

  /**
   * Phone lines information
   */
  phoneLines?: PhoneLinesInfo[];

  /** */
  shipping?: ShippingInfo;

  /**
   * Box billing identifier of a device. Applicable only for devices of `HardPhone` type.
   *  It is an alternative way to identify the device to be ordered. Either
   *  `model` structure, or `boxBillingId` must be specified
   * Format: int64
   */
  boxBillingId?: number;

  /**
   * Supported only for devices assigned to Limited extensions.
   *  If true, enables users to log in to this phone as a common phone.
   */
  useAsCommonPhone?: boolean;

  /**
   * Indicates whether this device is used for hot desking or not.
   *  Returned if `useAsCommonPhone` is set to false
   */
  hotDeskDevice?: boolean;

  /**
   * Network location status. `true` if the device is located in
   *  the configured corporate network (On-Net); `false` for Off-Net location.
   *  Parameter is not returned if `EmergencyAddressAutoUpdate` feature is not
   *  enabled for the account/user, or if device network location is not determined
   */
  inCompanyNet?: boolean;

  /** */
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
   *  - `Host` - device with a standalone paid phone line which can be linked to soft phone client instance;
   *  - `Guest` - device with a linked phone line;
   *  - `None` - device without a phone line or with a specific line (free, BLA, etc.)
   */
  linePooling?: "Host" | "Guest" | "None";

  /** */
  billingStatement?: BillingStatementInfo;

  /**
   * Ability to access the Voicemail without being prompted to enter a PIN from the hard phone
   */
  automaticVoicemailLogin?: boolean;
}

export default DeviceResource;
