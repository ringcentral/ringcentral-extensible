import {
  CountryInfo,
  TimezoneInfo,
  LanguageInfo,
  GreetingLanguageInfo,
  FormattingLocaleInfo,
  CurrencyInfo,
} from './index';

// Account level region data (web service Auto-Receptionist settings)
class AccountRegionalSettings {
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

  /**
   */
  currency?: CurrencyInfo;
}

export default AccountRegionalSettings;
