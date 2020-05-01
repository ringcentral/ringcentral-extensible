class EmergencyServiceAddressResourceRequest {
  /**
   */
  street?: string;

  /**
   */
  street2?: string;

  /**
   */
  city?: string;

  /**
   */
  zip?: string;

  /**
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
