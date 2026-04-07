/**
 * User interface language data
 */
interface LanguageInfo {
  /**
   * Internal identifier of a language
   */
  id?: string;

  /**
   * Canonical URI of a language
   * Format: uri
   */
  uri?: string;

  /**
   * Indicates whether a language is available as
   *  greeting language
   */
  greeting?: boolean;

  /**
   * Indicates whether a language is available as
   *  formatting locale
   */
  formattingLocale?: boolean;

  /**
   * Localization code of a language
   */
  localeCode?: string;

  /**
   * Two-letter country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format
   * Example: US
   */
  isoCode?: string;

  /**
   * Official name of a language
   */
  name?: string;

  /**
   * Indicates whether a language is available as UI language
   */
  ui?: boolean;

  /**
   * Time format
   */
  timeFormat?: string;

  /**
   * Date format
   */
  dateFormat?: string;
}

export default LanguageInfo;
