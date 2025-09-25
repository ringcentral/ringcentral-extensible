import CountryInfoShortModel from "./CountryInfoShortModel.js";
import TimezoneInfoBase from "./TimezoneInfoBase.js";
import RegionalLanguageInfo from "./RegionalLanguageInfo.js";
import GreetingLanguageInfo from "./GreetingLanguageInfo.js";
import FormattingLocaleInfo from "./FormattingLocaleInfo.js";
import CurrencyInfo from "./CurrencyInfo.js";

/**
 * Regional data (timezone, home country, language) of an extension/account.
 * The default is Company (Auto-Receptionist) settings
 */
interface AccountRegionalSettings {
  /** */
  homeCountry?: CountryInfoShortModel;

  /** */
  timezone?: TimezoneInfoBase;

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
