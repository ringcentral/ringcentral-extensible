import { ShippingAddressInfo, MethodResource } from '.'

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
