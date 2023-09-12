interface DeviceEmergencyInfoAddress {
  /**
   * Name of a customer
   */
  customerName?: string;

  /**
   * Street address, line 1 - street address, P.O. box, company name, c/o
   */
  street?: string;

  /**
   * Street address, line 2 - apartment, suite, unit, building, floor, etc.
   */
  street2?: string;

  /**
   * City name
   */
  city?: string;

  /**
   * Zip code
   */
  zip?: string;

  /**
   * State/province name
   */
  state?: string;

  /**
   * Internal identifier of a state
   */
  stateId?: string;

  /**
   * ISO code of a state
   */
  stateIsoCode?: string;

  /**
   * Full name of a state
   */
  stateName?: string;

  /**
   * Internal identifier of a country
   */
  countryId?: string;

  /**
   * ISO code of a country
   */
  countryIsoCode?: string;

  /**
   * Country name
   */
  country?: string;

  /**
   * Full name of a country
   */
  countryName?: string;

  /**
   * Resulting status of emergency address synchronization. Returned
 *  for 'Get Device Info' request if `syncEmergencyAddress` parameter is set
 *  to 'True'
   */
  syncStatus?: ('Verified' | 'Updated' | 'Deleted' | 'NotRequired' | 'Unsupported' | 'Failed');

  /**
   * (Optional) Building name
   */
  buildingName?: string;

  /**
   * Building/street number
   */
  buildingNumber?: string;

  /**
   * Street type
   */
  streetType?: string;
}

export default DeviceEmergencyInfoAddress;
