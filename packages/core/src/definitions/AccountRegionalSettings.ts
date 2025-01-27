import CountryInfoShortModel from "./CountryInfoShortModel.js";
import TimezoneInfo from "./TimezoneInfo.js";
import RegionalLanguageInfo from "./RegionalLanguageInfo.js";
import GreetingLanguageInfo from "./GreetingLanguageInfo.js";
import FormattingLocaleInfo from "./FormattingLocaleInfo.js";
import CurrencyInfo from "./CurrencyInfo.js";

/**
 * Account level region data (web service Auto-Receptionist settings)
 */
interface AccountRegionalSettings {
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

  /** */
  currency?: CurrencyInfo;
}

export default AccountRegionalSettings;
