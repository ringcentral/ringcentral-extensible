import type ExtensionCountryInfoRequest from './ExtensionCountryInfoRequest';
import type ExtensionTimezoneInfoRequest from './ExtensionTimezoneInfoRequest';
import type ExtensionLanguageInfoRequest from './ExtensionLanguageInfoRequest';
import type ExtensionGreetingLanguageInfoRequest from './ExtensionGreetingLanguageInfoRequest';
import type ExtensionFormattingLocaleInfoRequest from './ExtensionFormattingLocaleInfoRequest';
import type ExtensionCurrencyInfoRequest from './ExtensionCurrencyInfoRequest';

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
   * Time format setting
   * Default: 12h
   */
  timeFormat?: '12h' | '24h';
}

export default ExtensionRegionalSettingRequest;
