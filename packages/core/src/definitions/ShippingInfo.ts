import type ShippingMethodInfo from './ShippingMethodInfo';
import type ShippingAddressInfo from './ShippingAddressInfo';

/**
 * Shipping information, according to which devices (in case of HardPhone)
 * or e911 stickers (in case of SoftPhone and OtherPhone) will be delivered
 * to the customer
 *
 */
interface ShippingInfo {
  /**
   * Order item shipping status. It is set to `Initial` when the order is submitted.
   *  Then it is changed to `Accepted` when a distributor starts processing the order.
   *  Finally, it is changed to `Shipped` which means that the distributor has shipped the device.
   * Example: Shipped
   */
  status?: 'Initial' | 'Accepted' | 'Shipped';

  /**
   * Shipping carrier name. Appears only if the device status is 'Shipped'
   */
  carrier?: string;

  /**
   * Carrier-specific tracking number. Appears only if the device status is 'Shipped'
   */
  trackingNumber?: string;

  /**
   */
  method?: ShippingMethodInfo;

  /**
   */
  address?: ShippingAddressInfo;
}

export default ShippingInfo;
