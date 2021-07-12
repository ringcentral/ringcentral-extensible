import {DeviceEmergencyServiceAddressResource, MethodResource} from './index';

// Shipping information, according to which devices (in case of HardPhone ) or e911 stickers (in case of SoftPhone and OtherPhone ) will be delivered to the customer
class Shipping {
  /**
   */
  address?: DeviceEmergencyServiceAddressResource;

  /**
   */
  method?: MethodResource;

  /**
   */
  status?: string;

  /**
   */
  carrier?: string;

  /**
   */
  trackingNumber?: string;
}

export default Shipping;
