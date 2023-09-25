import type CountryInfoShortModel from './CountryInfoShortModel';
import type TimezoneInfo from './TimezoneInfo';
import type RegionalLanguageInfo from './RegionalLanguageInfo';
import type GreetingLanguageInfo from './GreetingLanguageInfo';
import type FormattingLocaleInfo from './FormattingLocaleInfo';

/**
 * Regional data (timezone, home country, language) of an extension/account.
 * The default is Company (Auto-Receptionist) settings
 *
 */
interface RegionalSettings {
  /**
   */
  homeCountry?: CountryInfoShortModel;

  /**
   */
  timezone?: TimezoneInfo;

  /**
   */
  language?: RegionalLanguageInfo;

  /**
   */
  greetingLanguage?: GreetingLanguageInfo;

  /**
   */
  formattingLocale?: FormattingLocaleInfo;

  /**
   * Time format setting. The default value is '12h' = ['12h', '24h']
   */
  timeFormat?: '12h' | '24h';
}

export default RegionalSettings;
