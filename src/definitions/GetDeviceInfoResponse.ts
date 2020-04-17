import { ModelInfo, ExtensionInfoIntId, EmergencyServiceAddressResource, PhoneLinesInfo, ShippingInfo, DeviceSiteInfo } from '.'

class GetDeviceInfoResponse
{
  /**
   * Internal identifier of a device
   */
  id?: string

  /**
   * Canonical URI of a device
   */
  uri?: string

  /**
   * Device identification number (stock keeping unit) in the format TP-ID [-AT-AC], where TP is device type (HP for RC HardPhone, DV for all other devices including softphone); ID - device model ID; AT -addon type ID; AC - addon count (if any). For example 'HP-56-2-2'
   */
  sku?: string

  /**
   * Device type
   * Default: HardPhone
   */
  type?: ('BLA' | 'SoftPhone' | 'OtherPhone' | 'HardPhone' | 'WebPhone' | 'Paging')

  /**
   * Device name. Mandatory if ordering  SoftPhone  or  OtherPhone. Optional for  HardPhone. If not specified for HardPhone, then device model name is used as device name
   */
  name?: string

  /**
   * Serial number for HardPhone (is returned only when the phone is shipped and provisioned); endpoint_id for softphone and mobile applications
   */
  serial?: string

  /**
   * Device status
   */
  status?: ('Offline' | 'Online')

  /**
   * PC name for softphone
   */
  computerName?: string

  /**
   * HardPhone model information
   */
  model?: ModelInfo

  /**
   * This attribute can be omitted for unassigned devices
   */
  extension?: ExtensionInfoIntId

  /**
   * Address for emergency cases. The same emergency address is assigned to all the numbers of one device
   */
  emergencyServiceAddress?: EmergencyServiceAddressResource

  /**
   * Phone lines information
   */
  phoneLines?: PhoneLinesInfo[]

  /**
   * Shipping information, according to which devices (in case of  HardPhone ) or e911 stickers (in case of  SoftPhone  and  OtherPhone ) will be delivered to the customer
   */
  shipping?: ShippingInfo

  /**
   * Box billing identifier of a device. Applicable only for HardPhones. It is an alternative way to identify the device to be ordered. EitherT? model  structure, or  boxBillingId  must be specified forT?HardPhone
   */
  boxBillingId?: number

  /**
   * Supported only for devices assigned to Limited extensions. If true, enables users to log in to this phone as a common phone.
   */
  useAsCommonPhone?: boolean

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

  /**
   * Pooling type of a deviceHost - device with standalone paid phone line which can be linked to Glip/Softphone instanceGuest - device with a linked phone lineNone - device without a phone line or with specific line (free, BLA, etc.) = ['Host', 'Guest', 'None']
   */
  linePooling?: ('Host' | 'Guest' | 'None')
}

export default GetDeviceInfoResponse
