import CountryInfo from './CountryInfo'
import TimezoneInfo from './TimezoneInfo'
import LanguageInfo from './LanguageInfo'
import GreetingLanguageInfo from './GreetingLanguageInfo'
import FormattingLocaleInfo from './FormattingLocaleInfo'

class RegionalSettings
{
    /**
     * Extension country information
     */
    homeCountry?: CountryInfo

    /**
     * Extension timezone information
     */
    timezone?: TimezoneInfo

    /**
     * User interface language data
     */
    language?: LanguageInfo

    /**
     * Information on language used for telephony greetings
     */
    greetingLanguage?: GreetingLanguageInfo

    /**
     * Formatting language preferences for numbers, dates and currencies
     */
    formattingLocale?: FormattingLocaleInfo

    /**
     * Time format setting. The default value is '12h' = ['12h', '24h']
     * Enum: 12h, 24h
     */
    timeFormat?: string

    /**
     */
    bias?: string
}

export default RegionalSettings