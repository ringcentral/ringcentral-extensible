import { DeviceEmergencyServiceAddressResource, MethodResource } from '.'

class Shipping
{
  /**
   */
  address?: DeviceEmergencyServiceAddressResource

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

export default Shipping
