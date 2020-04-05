import DeviceSiteInfo from './DeviceSiteInfo'
import ModelInfo from './ModelInfo'
import ExtensionResourceIntId from './ExtensionResourceIntId'
import PhoneLineResource from './PhoneLineResource'
import EmergencyServiceAddressResource from './EmergencyServiceAddressResource'
import ShippingResource from './ShippingResource'

class DeviceResource
{
    /// <summary>
    /// Internal identifier of a device
    /// </summary>
    id: string

    /// <summary>
    /// Link to a device resource
    /// </summary>
    uri: string

    /// <summary>
    /// Device identification number (stock keeping unit) in the format TP-ID [-AT-AC], where TP is device type (HP for RC HardPhone, DV for all other devices including softphone); ID - device model ID; AT -addon type ID; AC - addon count (if any). For example 'HP-56-2-2'
    /// </summary>
    sku: string

    /// <summary>
    /// Device type
    /// Default: HardPhone
    /// Enum: BLA, HardPhone, SoftPhone, OtherPhone, Paging, WebPhone
    /// </summary>
    type: string

    /// <summary>
    /// Status of a device
    /// Enum: Online, Offline
    /// </summary>
    status: string

    /// <summary>
    /// Site data
    /// </summary>
    site: DeviceSiteInfo

    /// <summary>
    /// Device name. Mandatory if ordering SoftPhone or OtherPhone . Optional for HardPhone . If not specified for HardPhone, then device model name is used as device name
    /// </summary>
    name: string

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
    extension: ExtensionResourceIntId

    /// <summary>
    /// Phone lines information
    /// </summary>
    phoneLines: PhoneLineResource[]

    /// <summary>
    /// Address for emergency cases. The same emergency address is assigned to all numbers of a single device
    /// </summary>
    emergencyServiceAddress: EmergencyServiceAddressResource

    /// <summary>
    /// Shipping information, according to which devices (in case of HardPhone) or e911 stickers (in case of SoftPhone and OtherPhone) will be delivered to the customer
    /// </summary>
    shipping: ShippingResource

    /// <summary>
    /// Box billing identifier of a device. Applicable only for HardPhones. It is an alternative way to identify the device to be ordered. Either  model structure, or boxBillingId must be specified for HardPhone
    /// </summary>
    boxBillingId: number

    /// <summary>
    /// Pooling type of a deviceHost - device with standalone paid phone line which can be linked to Glip/Softphone instanceGuest - device with a linked phone lineNone - device without a phone line or with specific line (free, BLA, etc.) = ['Host', 'Guest', 'None']
    /// Enum: Host, Guest, None
    /// </summary>
    linePooling: string

    /// <summary>
    /// Supported only for devices assigned to Limited extensions. If true, enables users to log in to this phone as a common phone.
    /// </summary>
    useAsCommonPhone: boolean

    /// <summary>
    /// Network location status. 'True' if device is located in the configured corporate network, in this case `bssid` or public/private IP addresses (`hostIp`) must be found in the corporate maps. If `bssid` is not found in the Wireless Access Points map, then the search is performed by public/private IP addresses in the IP Networks map. 'False' if network parameters are not found in corporate maps (`bssid` and public/private IP addresses for wi-fi or for Ethernet connection)
    /// </summary>
    inCompanyNet: boolean

    /// <summary>
    /// Datetime of receiving last location report in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, for example *2016-03-10T18:07:52.534Z
    /// </summary>
    lastLocationReportTime: string
}

export default DeviceResource