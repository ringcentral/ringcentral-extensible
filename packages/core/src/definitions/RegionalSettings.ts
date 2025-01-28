import CountryInfoShortModel from "./CountryInfoShortModel";
import TimezoneInfo from "./TimezoneInfo";
import RegionalLanguageInfo from "./RegionalLanguageInfo";
import GreetingLanguageInfo from "./GreetingLanguageInfo";
import FormattingLocaleInfo from "./FormattingLocaleInfo";

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
