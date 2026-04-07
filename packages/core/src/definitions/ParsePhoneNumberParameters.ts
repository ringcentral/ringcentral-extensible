/**
 * Query parameters for operation parsePhoneNumber
 */
interface ParsePhoneNumberParameters {
  /**
   * Two-letter country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format
   * Example: US
   */
  homeCountry?: string;

  /**
   * The default value is `false`. If `true`, the numbers that are
   *  closer to the home country are given higher priority
   */
  nationalAsPriority?: boolean;
}

export default ParsePhoneNumberParameters;
