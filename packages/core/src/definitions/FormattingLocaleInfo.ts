/**
 * Formatting language preferences for numbers, dates and currencies
 */
interface FormattingLocaleInfo {
  /**
   * Internal identifier of a formatting language
   */
  id?: string;

  /**
   * Localization code of a formatting language
   */
  localeCode?: string;

  /**
   * Official name of a formatting language
   */
  name?: string;
}

export default FormattingLocaleInfo;
