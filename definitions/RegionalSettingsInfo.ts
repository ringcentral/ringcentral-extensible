import TimezoneResource from './TimezoneResource'
import CountryResource from './CountryResource'
import LanguageResource from './LanguageResource'

class RegionalSettingsInfo
{
    /**
     */
    timezone: TimezoneResource

    /**
     */
    homeCountry: CountryResource

    /**
     */
    language: LanguageResource

    /**
     */
    greetingLanguage: LanguageResource

    /**
     */
    formattingLocale: LanguageResource
}

export default RegionalSettingsInfo