import DeviceEmergencyServiceAddressResource from './DeviceEmergencyServiceAddressResource'
import MethodResource from './MethodResource'

class Shipping
{
    /// <summary>
    /// </summary>
    address: DeviceEmergencyServiceAddressResource

    /// <summary>
    /// </summary>
    method: MethodResource

    /// <summary>
    /// </summary>
    status: string

    /// <summary>
    /// </summary>
    carrier: string

    /// <summary>
    /// </summary>
    trackingNumber: string
}

export default Shipping