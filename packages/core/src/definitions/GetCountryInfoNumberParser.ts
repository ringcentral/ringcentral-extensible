interface GetCountryInfoNumberParser {
  /**
   * Internal identifier of a country
   */
  id?: string;

  /**
   * Canonical URI of a country resource
   * Format: uri
   */
  uri?: string;

  /**
   * Country calling code defined by ITU-T recommendations `E.123`
   *  and `E.164`, see Calling Codes
   * Example: 1
   */
  callingCode?: string;

  /**
   * Country code in `ISO 3166` alpha-2 format
   * Example: US
   */
  isoCode?: string;

  /**
   * The official name of the country.
   * Example: United States
   */
  name?: string;
}

export default GetCountryInfoNumberParser;
