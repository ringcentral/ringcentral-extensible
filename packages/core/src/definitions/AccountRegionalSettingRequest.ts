import type AccountCountryInfoRequest from "./AccountCountryInfoRequest.js";
import type AccountFormattingLocaleInfoRequest from "./AccountFormattingLocaleInfoRequest.js";
import type AccountGreetingLanguageInfoRequest from "./AccountGreetingLanguageInfoRequest.js";
import type AccountLanguageInfoRequest from "./AccountLanguageInfoRequest.js";
import type AccountTimezoneInfoRequest from "./AccountTimezoneInfoRequest.js";

interface AccountRegionalSettingRequest {
  /**
   */
  homeCountry?: AccountCountryInfoRequest;

  /**
   * Required
   */
  timezone?: AccountTimezoneInfoRequest;

  /**
   */
  language?: AccountLanguageInfoRequest;

  /**
   */
  greetingLanguage?: AccountGreetingLanguageInfoRequest;

  /**
   */
  formattingLocale?: AccountFormattingLocaleInfoRequest;

  /**
   * Time format (12-hours or 24-hours).
   * Default: 12h
   */
  timeFormat?: "12h" | "24h";
}

export default AccountRegionalSettingRequest;
