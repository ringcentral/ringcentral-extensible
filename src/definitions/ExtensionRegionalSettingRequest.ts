import ExtensionCountryInfoRequest from './ExtensionCountryInfoRequest'
import ExtensionTimezoneInfoRequest from './ExtensionTimezoneInfoRequest'
import ExtensionLanguageInfoRequest from './ExtensionLanguageInfoRequest'
import ExtensionGreetingLanguageInfoRequest from './ExtensionGreetingLanguageInfoRequest'
import ExtensionFormattingLocaleInfoRequest from './ExtensionFormattingLocaleInfoRequest'

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