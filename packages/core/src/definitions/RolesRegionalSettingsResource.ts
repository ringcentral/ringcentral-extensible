import RolesTimezoneResource from './RolesTimezoneResource';
import RolesCountryResource from './RolesCountryResource';
import RolesLanguageResource from './RolesLanguageResource';
import CurrencyResource from './CurrencyResource';

interface RolesRegionalSettingsResource {
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
  timeFormat?: ('12h' | '24h');

  /**
   */
  currency?: CurrencyResource;
}

export default RolesRegionalSettingsResource;
