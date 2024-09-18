interface CommonEmergencyLocationAddressInfo {
  /**
   * Country name
   */
  country?: string;

  /**
   * Internal identifier of a country
   */
  countryId?: string;

  /**
   * Two-letter country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format
   * Example: US
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
   * The name of the street (The field is utilized as 'streetName' field for FR addresses)
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
}

export default CommonEmergencyLocationAddressInfo;
