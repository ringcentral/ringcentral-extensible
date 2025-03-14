import CountryInfoShortModel from "./CountryInfoShortModel.js";
import TimezoneInfo from "./TimezoneInfo.js";
import RegionalLanguageInfo from "./RegionalLanguageInfo.js";
import GreetingLanguageInfo from "./GreetingLanguageInfo.js";
import FormattingLocaleInfo from "./FormattingLocaleInfo.js";

/**
 * Regional data (timezone, home country, language) of an extension/account.
 * The default is Company (Auto-Receptionist) settings
 */
interface RegionalSettings {
  /** */
  homeCountry?: CountryInfoShortModel;

  /** */
  timezone?: TimezoneInfo;

  /** */
  language?: RegionalLanguageInfo;

  /** */
  greetingLanguage?: GreetingLanguageInfo;

  /** */
  formattingLocale?: FormattingLocaleInfo;

  /**
   * Time format (12-hours or 24-hours).
   * Default: 12h
   */
  timeFormat?: "12h" | "24h";
}

export default RegionalSettings;
