import TimezoneResource from './TimezoneResource'
import CountryResource from './CountryResource'
import LanguageResource from './LanguageResource'

class RegionalSettingsInfo
{
    /// <summary>
    /// </summary>
    timezone: TimezoneResource

    /// <summary>
    /// </summary>
    homeCountry: CountryResource

    /// <summary>
    /// </summary>
    language: LanguageResource

    /// <summary>
    /// </summary>
    greetingLanguage: LanguageResource

    /// <summary>
    /// </summary>
    formattingLocale: LanguageResource
}

export default RegionalSettingsInfo