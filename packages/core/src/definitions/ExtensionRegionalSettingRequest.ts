import ExtensionCountryInfoRequest from "./ExtensionCountryInfoRequest";
import ExtensionTimezoneInfoRequest from "./ExtensionTimezoneInfoRequest";
import ExtensionLanguageInfoRequest from "./ExtensionLanguageInfoRequest";
import ExtensionGreetingLanguageInfoRequest from "./ExtensionGreetingLanguageInfoRequest";
import ExtensionFormattingLocaleInfoRequest from "./ExtensionFormattingLocaleInfoRequest";
import ExtensionCurrencyInfoRequest from "./ExtensionCurrencyInfoRequest";

/**
 * Regional data (timezone, home country, language) of an extension.
 * The default is Company (Auto-Receptionist) settings
 */
interface ExtensionRegionalSettingRequest {
  /** */
  homeCountry?: ExtensionCountryInfoRequest;

  /** */
  timezone?: ExtensionTimezoneInfoRequest;

  /** */
  language?: ExtensionLanguageInfoRequest;

  /** */
  greetingLanguage?: ExtensionGreetingLanguageInfoRequest;

  /** */
  formattingLocale?: ExtensionFormattingLocaleInfoRequest;

  /** */
  currency?: ExtensionCurrencyInfoRequest;

  /**
   * Time format (12-hours or 24-hours).
   * Default: 12h
   */
  timeFormat?: "12h" | "24h";
}

export default ExtensionRegionalSettingRequest;
