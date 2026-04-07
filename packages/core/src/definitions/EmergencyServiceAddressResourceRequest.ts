/**
 * Address for emergency cases. The same emergency address is assigned to all
 * numbers of a single device. If the emergency address is also specified in
 * `emergency` resource, then this value is ignored
 *
 */
interface EmergencyServiceAddressResourceRequest {
  /**
   * First line address
   */
  street?: string;

  /**
   * Second line address (apartment, suite, unit, building, floor,
   *  etc.)
   */
  street2?: string;

  /**
   * Postal (Zip) code
   */
  zip?: string;

  /**
   * Customer name
   */
  customerName?: string;

  /**
   * State/province name
   */
  state?: string;

  /**
   * Internal identifier of a state
   */
  stateId?: string;

  /**
   * Country name
   */
  country?: string;

  /**
   * Internal identifier of a country
   */
  countryId?: string;
}

export default EmergencyServiceAddressResourceRequest;
