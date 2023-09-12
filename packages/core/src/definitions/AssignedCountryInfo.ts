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
   */
  uri?: string;

  /**
   * Country code according to the ISO standard, see [ISO 3166](https://www.iso.org/iso-3166-country-codes.html)
   */
  isoCode?: string;

  /**
   * Official name of a country
   */
  name?: string;
}

export default AssignedCountryInfo;
