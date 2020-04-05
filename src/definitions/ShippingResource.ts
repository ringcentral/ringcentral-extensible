import ShippingAddressInfo from './ShippingAddressInfo'
import MethodResource from './MethodResource'

class ShippingResource
{
  /**
   */
  address?: ShippingAddressInfo

  /**
   */
  method?: MethodResource

  /**
   */
  status?: string

  /**
   */
  carrier?: string

  /**
   */
  trackingNumber?: string
}

export default ShippingResource
