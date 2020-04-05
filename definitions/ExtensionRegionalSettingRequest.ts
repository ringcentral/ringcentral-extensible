import ExtensionCountryInfoRequest from './ExtensionCountryInfoRequest'
import ExtensionTimezoneInfoRequest from './ExtensionTimezoneInfoRequest'
import ExtensionLanguageInfoRequest from './ExtensionLanguageInfoRequest'
import ExtensionGreetingLanguageInfoRequest from './ExtensionGreetingLanguageInfoRequest'
import ExtensionFormattingLocaleInfoRequest from './ExtensionFormattingLocaleInfoRequest'

class ExtensionRegionalSettingRequest
{
    /// <summary>
    /// </summary>
    homeCountry: ExtensionCountryInfoRequest

    /// <summary>
    /// </summary>
    timezone: ExtensionTimezoneInfoRequest

    /// <summary>
    /// </summary>
    language: ExtensionLanguageInfoRequest

    /// <summary>
    /// </summary>
    greetingLanguage: ExtensionGreetingLanguageInfoRequest

    /// <summary>
    /// </summary>
    formattingLocale: ExtensionFormattingLocaleInfoRequest

    /// <summary>
    /// Time format setting
    /// Default: 12h
    /// Enum: 12h, 24h
    /// </summary>
    timeFormat: string
}

export default ExtensionRegionalSettingRequest