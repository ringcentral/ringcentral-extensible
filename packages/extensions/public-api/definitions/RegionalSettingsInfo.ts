import {
  DeviceTimezoneResource,
  DeviceCountryResource,
  LanguageResource,
} from './index';

class RegionalSettingsInfo {
  /**
   */
  timezone?: DeviceTimezoneResource;

  /**
   */
  homeCountry?: DeviceCountryResource;

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
