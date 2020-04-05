import DeviceModelInfo from './DeviceModelInfo'
import DeviceExtensionInfo from './DeviceExtensionInfo'
import DeviceEmergencyServiceAddressResource from './DeviceEmergencyServiceAddressResource'
import Shipping from './Shipping'
import DevicePhoneLinesInfo from './DevicePhoneLinesInfo'
import DeviceSiteInfo from './DeviceSiteInfo'

class SipRegistrationDeviceInfo
{
  /**
   * Link to a device resource
   */
  uri?: string

  /**
   * Internal identifier of a Device
   */
  id?: string

  /**
   * Device type
   * Enum: HardPhone, SoftPhone, OtherPhone, Paging, WebPhone
   */
  type?: string

  /**
   * Device identification number (stock keeping unit) in the format TP-ID [-AT-AC], where TP is device type (HP for RC HardPhone, DV for all other devices including softphone); ID - device model ID; AT -addon type ID; AC - addon count (if any). For example 'HP-56-2-2'
   */
  sku?: string

  /**
   * Enum: Online, Offline
   */
  status?: string

  /**
   * Device name. Mandatory if ordering  SoftPhone or OtherPhone. Optional for  HardPhone. If not specified for HardPhone, then device  model  name is used as device  name
   */
  name?: string

  /**
   * Serial number for HardPhone (is returned only when the phone is shipped and provisioned); endpoint_id for softphone and mobile applications
   */
  serial?: string

  /**
   * PC name for softphone
   */
  computerName?: string

  /**
   * HardPhone model information
   */
  model?: DeviceModelInfo

  /**
   * Internal identifier of an extension the device should be assigned to
   */
  extension?: DeviceExtensionInfo

  /**
   * Address for emergency cases. The same emergency address is assigned to all the numbers of one device
   */
  emergencyServiceAddress?: DeviceEmergencyServiceAddressResource

  /**
   * Shipping information, according to which devices (in case of HardPhone ) or e911 stickers (in case of SoftPhone and OtherPhone ) will be delivered to the customer
   */
  shipping?: Shipping

  /**
   * Phone lines information
   */
  phoneLines?: DevicePhoneLinesInfo[]

  /**
   * Box billing identifier of a device. Applicable only for HardPhones. It is an alternative way to identify the device to be ordered. EitherT? model  structure, or  boxBillingId  must be specified forT?HardPhone
   */
  boxBillingId?: number

  /**
   * Supported only for devices assigned to Limited extensions. If true, enables users to log in to this phone as a common phone.
   */
  useAsCommonPhone?: boolean

  /**
   * Pooling type of a deviceHost - device with standalone paid phone line which can be linked to Glip/Softphone instanceGuest - device with a linked phone lineNone - device without a phone line or with specific line (free, BLA, etc.) = ['Host', 'Guest', 'None']
   * Enum: Host, Guest, None
   */
  linePooling?: string

  /**
   * Network location status. 'True' if the device is located in the configured corporate network (On-Net); 'False' for Off-Net location. Parameter is not returned if `EmergencyAddressAutoUpdate` feature is not enabled for the account/user, or if device network location is not determined
   */
  inCompanyNet?: boolean

  /**
   * Site data
   */
  site?: DeviceSiteInfo

  /**
   * Datetime of receiving last location report in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, for example *2016-03-10T18:07:52.534Z
   */
  lastLocationReportTime?: string
}

export default SipRegistrationDeviceInfo
