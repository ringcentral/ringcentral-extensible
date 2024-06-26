/**
 * Brief information on a phone number country
 */
interface PhoneNumberCountryInfo {
  /**
   * Internal identifier of a home country
   */
  id?: string;

  /**
   * Canonical URI of a home country
   * Format: uri
   */
  uri?: string;

  /**
   * Official name of a home country
   */
  name?: string;
}

export default PhoneNumberCountryInfo;
