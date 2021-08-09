import {
  RolesTimezoneResource,
  RolesCountryResource,
  RolesLanguageResource,
  CurrencyResource,
} from './index';

class RolesRegionalSettingsResource {
  /**
   */
  timezone?: RolesTimezoneResource;

  /**
   */
  homeCountry?: RolesCountryResource;

  /**
   */
  language?: RolesLanguageResource;

  /**
   */
  greetingLanguage?: RolesLanguageResource;

  /**
   */
  formattingLocale?: RolesLanguageResource;

  /**
   */
  timeFormat?: '12h' | '24h';

  /**
   */
  currency?: CurrencyResource;
}
export default RolesRegionalSettingsResource;
