import ModelInfo from './ModelInfo'
import ExtensionInfoIntId from './ExtensionInfoIntId'
import EmergencyServiceAddressResource from './EmergencyServiceAddressResource'
import PhoneLinesInfo from './PhoneLinesInfo'
import ShippingInfo from './ShippingInfo'
import DeviceSiteInfo from './DeviceSiteInfo'

class ExtensionDeviceResponse
{
    /// <summary>
    /// Internal identifier of a device
    /// </summary>
    id: string

    /// <summary>
    /// Canonical URI of a device
    /// </summary>
    uri: string

    /// <summary>
    /// Device identification number (stock keeping unit) in the format TP-ID [-AT-AC], where TP is device type (HP for RC HardPhone, DV for all other devices including softphone); ID - device model ID; AT -addon type ID; AC - addon count (if any). For example 'HP-56-2-2'
    /// </summary>
    sku: string

    /// <summary>
    /// Device type
    /// Default: HardPhone
    /// Enum: SoftPhone, OtherPhone, HardPhone, Paging
    /// </summary>
    type: string

    /// <summary>
    /// Device name. Mandatory if ordering  SoftPhone  or  OtherPhone. Optional for  HardPhone. If not specified for HardPhone, then device model name is used as device name
    /// </summary>
    name: string

    /// <summary>
    /// Device status
    /// Enum: Offline, Online
    /// </summary>
    status: string

    /// <summary>
    /// Serial number for HardPhone (is returned only when the phone is shipped and provisioned); endpoint_id for softphone and mobile applications
    /// </summary>
    serial: string

    /// <summary>
    /// PC name for softphone
    /// </summary>
    computerName: string

    /// <summary>
    /// HardPhone model information
    /// </summary>
    model: ModelInfo

    /// <summary>
    /// This attribute can be omitted for unassigned devices
    /// </summary>
    extension: ExtensionInfoIntId

    /// <summary>
    /// Address for emergency cases. The same emergency address is assigned to all the numbers of one device
    /// </summary>
    emergencyServiceAddress: EmergencyServiceAddressResource

    /// <summary>
    /// Phone lines information
    /// </summary>
    phoneLines: PhoneLinesInfo[]

    /// <summary>
    /// Shipping information, according to which devices (in case of  HardPhone ) or e911 stickers (in case of  SoftPhone  and  OtherPhone ) will be delivered to the customer
    /// </summary>
    shipping: ShippingInfo

    /// <summary>
    /// Box billing identifier of a device. Applicable only for HardPhones. It is an alternative way to identify the device to be ordered. EitherT? model  structure, or  boxBillingId  must be specified forT?HardPhone
    /// </summary>
    boxBillingId: number

    /// <summary>
    /// Supported only for devices assigned to Limited extensions. If true, enables users to log in to this phone as a common phone.
    /// </summary>
    useAsCommonPhone: boolean

    /// <summary>
    /// Pooling type of a deviceHost - device with standalone paid phone line which can be linked to Glip/Softphone instanceGuest - device with a linked phone lineNone - device without a phone line or with specific line (free, BLA, etc.) = ['Host', 'Guest', 'None']
    /// Enum: Host, Guest, None
    /// </summary>
    linePooling: string

    /// <summary>
    /// Network location status. 'True' if the device is located in the configured corporate network (On-Net); 'False' for Off-Net location. Parameter is not returned if `EmergencyAddressAutoUpdate` feature is not enabled for the account/user, or if device network location is not determined
    /// </summary>
    inCompanyNet: boolean

    /// <summary>
    /// Site data
    /// </summary>
    site: DeviceSiteInfo

    /// <summary>
    /// Datetime of receiving last location report in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, for example *2016-03-10T18:07:52.534Z
    /// </summary>
    lastLocationReportTime: string
}

export default ExtensionDeviceResponse