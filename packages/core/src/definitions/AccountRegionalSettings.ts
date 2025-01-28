import CountryInfoShortModel from "./CountryInfoShortModel";
import TimezoneInfo from "./TimezoneInfo";
import RegionalLanguageInfo from "./RegionalLanguageInfo";
import GreetingLanguageInfo from "./GreetingLanguageInfo";
import FormattingLocaleInfo from "./FormattingLocaleInfo";
import CurrencyInfo from "./CurrencyInfo";

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
