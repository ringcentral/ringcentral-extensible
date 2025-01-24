import type RolesTimezoneResource from "./RolesTimezoneResource";
import type RolesCountryResource from "./RolesCountryResource";
import type RolesLanguageResource from "./RolesLanguageResource";
import type CurrencyResource from "./CurrencyResource";

interface RolesRegionalSettingsResource {
  /** */
  timezone?: RolesTimezoneResource;

  /** */
  homeCountry?: RolesCountryResource;

  /** */
  language?: RolesLanguageResource;

  /** */
  greetingLanguage?: RolesLanguageResource;

  /** */
  formattingLocale?: RolesLanguageResource;

  /**
   * Time format (12-hours or 24-hours).
   * Default: 12h
   */
  timeFormat?: "12h" | "24h";

  /** */
  currency?: CurrencyResource;
}

export default RolesRegionalSettingsResource;
