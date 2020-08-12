import {DeviceEmergencyServiceAddressResource, MethodResource} from './index';

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
