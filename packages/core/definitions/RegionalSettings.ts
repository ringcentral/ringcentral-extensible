import {
  CountryInfo,
  TimezoneInfo,
  LanguageInfo,
  GreetingLanguageInfo,
  FormattingLocaleInfo,
} from './index';

// Regional data (timezone, home country, language) of an extension/account. The default is Company (Auto-Receptionist) settings
class RegionalSettings {
  /**
   */
  homeCountry?: CountryInfo;

  /**
   */
  timezone?: TimezoneInfo;

  /**
   */
  language?: LanguageInfo;

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
