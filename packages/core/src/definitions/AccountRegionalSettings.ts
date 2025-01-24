import type CountryInfoShortModel from "./CountryInfoShortModel";
import type TimezoneInfo from "./TimezoneInfo";
import type RegionalLanguageInfo from "./RegionalLanguageInfo";
import type GreetingLanguageInfo from "./GreetingLanguageInfo";
import type FormattingLocaleInfo from "./FormattingLocaleInfo";
import type CurrencyInfo from "./CurrencyInfo";

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
