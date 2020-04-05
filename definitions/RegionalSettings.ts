import CountryInfo from './CountryInfo'
import TimezoneInfo from './TimezoneInfo'
import LanguageInfo from './LanguageInfo'
import GreetingLanguageInfo from './GreetingLanguageInfo'
import FormattingLocaleInfo from './FormattingLocaleInfo'

class RegionalSettings
{
    /// <summary>
    /// Extension country information
    /// </summary>
    homeCountry: CountryInfo

    /// <summary>
    /// Extension timezone information
    /// </summary>
    timezone: TimezoneInfo

    /// <summary>
    /// User interface language data
    /// </summary>
    language: LanguageInfo

    /// <summary>
    /// Information on language used for telephony greetings
    /// </summary>
    greetingLanguage: GreetingLanguageInfo

    /// <summary>
    /// Formatting language preferences for numbers, dates and currencies
    /// </summary>
    formattingLocale: FormattingLocaleInfo

    /// <summary>
    /// Time format setting. The default value is '12h' = ['12h', '24h']
    /// Enum: 12h, 24h
    /// </summary>
    timeFormat: string

    /// <summary>
    /// </summary>
    bias: string
}

export default RegionalSettings