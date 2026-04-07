interface CountryInfoBasicModel {
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
   * The official name of a country
   */
  name?: string;
}

export default CountryInfoBasicModel;
