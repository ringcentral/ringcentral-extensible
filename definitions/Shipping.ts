import DeviceEmergencyServiceAddressResource from './DeviceEmergencyServiceAddressResource'
import MethodResource from './MethodResource'

class Shipping
{
    /**
     */
    address: DeviceEmergencyServiceAddressResource

    /**
     */
    method: MethodResource

    /**
     */
    status: string

    /**
     */
    carrier: string

    /**
     */
    trackingNumber: string
}

export default Shipping