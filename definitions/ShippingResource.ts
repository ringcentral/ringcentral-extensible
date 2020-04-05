import ShippingAddressInfo from './ShippingAddressInfo'
import MethodResource from './MethodResource'

class ShippingResource
{
    /// <summary>
    /// </summary>
    address: ShippingAddressInfo

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

export default ShippingResource