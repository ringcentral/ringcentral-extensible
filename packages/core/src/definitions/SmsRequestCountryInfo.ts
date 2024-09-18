/**
 * Target number country information. Either `id` or `isoCode` can be specified.
 */
interface SmsRequestCountryInfo {
  /**
   * Internal identifier of a country
   */
  id?: string;

  /**
   * Two-letter country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format
   * Example: US
   */
  isoCode?: string;
}

export default SmsRequestCountryInfo;
