import type CountryInfoShortModel from "./CountryInfoShortModel.js";
import type TimezoneInfoBase from "./TimezoneInfoBase.js";
import type RegionalLanguageInfo from "./RegionalLanguageInfo.js";
import type GreetingLanguageInfo from "./GreetingLanguageInfo.js";
import type FormattingLocaleInfo from "./FormattingLocaleInfo.js";
import type CurrencyInfo from "./CurrencyInfo.js";

/**
 * Regional data (timezone, home country, language) of an extension/account.
 * The default is Company (Auto-Receptionist) settings
 *
 */
interface AccountRegionalSettings {
  /**
   */
  homeCountry?: CountryInfoShortModel;

  /**
   */
  timezone?: TimezoneInfoBase;

  /**
   */
  language?: RegionalLanguageInfo;

  /**
   */
  greetingLanguage?: GreetingLanguageInfo;

  /**
   */
  formattingLocale?: FormattingLocaleInfo;

  /**
   * Time format (12-hours or 24-hours).
   * Default: 12h
   */
  timeFormat?: "12h" | "24h";

  /**
   */
  currency?: CurrencyInfo;
}

export default AccountRegionalSettings;
