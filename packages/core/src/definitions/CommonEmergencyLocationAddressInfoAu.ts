interface CommonEmergencyLocationAddressInfoAu {
  /**
   * Country name
   */
  country?: string;

  /**
   * Internal identifier of a country
   */
  countryId?: string;

  /**
   * ISO code of a country
   */
  countryIsoCode?: string;

  /**
   * Full name of a country
   */
  countryName?: string;

  /**
   * State/Province name. Mandatory for the USA, the UK and Canada
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
   * City name
   */
  city?: string;

  /**
   * The name of the street (the field is utilized as 'streetName' field for AU addresses)
   */
  street?: string;

  /**
   * Company name
   */
  companyName?: string;

  /**
   * (Optional) Building name
   */
  buildingName?: string;

  /**
   * Street type
   */
  streetType?: string;

  /**
   * Building/street number
   */
  buildingNumber?: string;

  /**
   * Second line address (apartment, suite, unit, building, floor, etc.)
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
}

export default CommonEmergencyLocationAddressInfoAu;
