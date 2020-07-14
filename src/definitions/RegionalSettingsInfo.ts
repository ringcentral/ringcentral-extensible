import {TimezoneResource, CountryResource, LanguageResource} from '.';

class RegionalSettingsInfo {
  /**
   */
  timezone?: TimezoneResource;

  /**
   */
  homeCountry?: CountryResource;

  /**
   */
  language?: LanguageResource;

  /**
   */
  greetingLanguage?: LanguageResource;

  /**
   */
  formattingLocale?: LanguageResource;
}

export default RegionalSettingsInfo;
