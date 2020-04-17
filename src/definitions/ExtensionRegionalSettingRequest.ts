import { ExtensionCountryInfoRequest, ExtensionTimezoneInfoRequest, ExtensionLanguageInfoRequest, ExtensionGreetingLanguageInfoRequest, ExtensionFormattingLocaleInfoRequest } from '.'

class ExtensionRegionalSettingRequest
{
  /**
   */
  homeCountry?: ExtensionCountryInfoRequest

  /**
   */
  timezone?: ExtensionTimezoneInfoRequest

  /**
   */
  language?: ExtensionLanguageInfoRequest

  /**
   */
  greetingLanguage?: ExtensionGreetingLanguageInfoRequest

  /**
   */
  formattingLocale?: ExtensionFormattingLocaleInfoRequest

  /**
   * Time format setting
   * Default: 12h
   */
  timeFormat?: ('12h' | '24h')
}

export default ExtensionRegionalSettingRequest
