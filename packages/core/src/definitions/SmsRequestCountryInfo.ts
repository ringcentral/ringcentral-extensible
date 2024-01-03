/**
 * Target number country information. Either `id` or `isoCode` can be specified.
 */
interface SmsRequestCountryInfo {
  /**
   * Internal identifier of a country
   */
  id?: string;

  /**
   * ISO 3166-1 alpha-2 code of a country
   */
  isoCode?: string;
}

export default SmsRequestCountryInfo;
