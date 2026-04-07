/**
 * Internal RC "brand" information
 */
interface ServiceInfoBrand {
  /**
   * RingCentral brand ID
   * Required
   * Example: 6699
   */
  id?: string;

  /**
   * RingCentral brand name
   * Required
   * Example: Partner 1
   */
  name?: string;
}

export default ServiceInfoBrand;
