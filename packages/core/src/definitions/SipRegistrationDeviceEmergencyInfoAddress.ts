interface SipRegistrationDeviceEmergencyInfoAddress {
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
   * Two-letter country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format
   * Example: US
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
   * Specifies if emergency address is out of country
   */
  outOfCountry?: boolean;

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

export default SipRegistrationDeviceEmergencyInfoAddress;
