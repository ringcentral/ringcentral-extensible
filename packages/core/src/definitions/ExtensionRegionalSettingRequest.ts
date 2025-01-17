import type ExtensionCountryInfoRequest from './ExtensionCountryInfoRequest';
import type ExtensionTimezoneInfoRequest from './ExtensionTimezoneInfoRequest';
import type ExtensionLanguageInfoRequest from './ExtensionLanguageInfoRequest';
import type ExtensionGreetingLanguageInfoRequest from './ExtensionGreetingLanguageInfoRequest';
import type ExtensionFormattingLocaleInfoRequest from './ExtensionFormattingLocaleInfoRequest';
import type ExtensionCurrencyInfoRequest from './ExtensionCurrencyInfoRequest';

/**
 * Regional data (timezone, home country, language) of an extension.
 * The default is Company (Auto-Receptionist) settings
 *
 */
interface ExtensionRegionalSettingRequest {
  /**
   */
  homeCountry?: ExtensionCountryInfoRequest;

  /**
   */
  timezone?: ExtensionTimezoneInfoRequest;

  /**
   */
  language?: ExtensionLanguageInfoRequest;

  /**
   */
  greetingLanguage?: ExtensionGreetingLanguageInfoRequest;

  /**
   */
  formattingLocale?: ExtensionFormattingLocaleInfoRequest;

  /**
   */
  currency?: ExtensionCurrencyInfoRequest;

  /**
   * Time format (12-hours or 24-hours).
   * Default: 12h
   */
  timeFormat?: '12h' | '24h';
}

export default ExtensionRegionalSettingRequest;
