/**
 * Devices shipping method. It is required if devices are ordered.
 * Availability of different shipping methods depends on package
 * definition.
 *
 */
interface ShippingMethodIdModel {
  /**
   * Shipping method ID:
   *  - "1" - Ground Shipping (5-7 business days)
   *  - "2" - Expedited Shipping (2-days)
   *  - "3" - Overnight Shipping
   * Required
   * Default: 1
   */
  id?: '1' | '2' | '3';
}

export default ShippingMethodIdModel;
