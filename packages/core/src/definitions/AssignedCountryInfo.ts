/**
 * Information on a country assigned to an extension user. Returned for the User extension type only
 */
interface AssignedCountryInfo {
  /**
   * Internal identifier of an assigned country
   */
  id?: string;

  /**
   * Canonical URI of an assigned country resource
   * Format: uri
   */
  uri?: string;

  /**
   * Two-letter country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format
   * Example: US
   */
  isoCode?: string;

  /**
   * Official name of a country
   */
  name?: string;
}

export default AssignedCountryInfo;
