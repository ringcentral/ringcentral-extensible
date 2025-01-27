import ExtensionCountryInfoRequest from "./ExtensionCountryInfoRequest.js";
import ExtensionTimezoneInfoRequest from "./ExtensionTimezoneInfoRequest.js";
import ExtensionLanguageInfoRequest from "./ExtensionLanguageInfoRequest.js";
import ExtensionGreetingLanguageInfoRequest from "./ExtensionGreetingLanguageInfoRequest.js";
import ExtensionFormattingLocaleInfoRequest from "./ExtensionFormattingLocaleInfoRequest.js";
import ExtensionCurrencyInfoRequest from "./ExtensionCurrencyInfoRequest.js";

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
