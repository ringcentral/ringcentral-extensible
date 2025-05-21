import AccountCountryInfoRequest from "./AccountCountryInfoRequest.js";
import AccountTimezoneInfoRequest from "./AccountTimezoneInfoRequest.js";
import AccountLanguageInfoRequest from "./AccountLanguageInfoRequest.js";
import AccountGreetingLanguageInfoRequest from "./AccountGreetingLanguageInfoRequest.js";
import AccountFormattingLocaleInfoRequest from "./AccountFormattingLocaleInfoRequest.js";

interface AccountRegionalSettingRequest {
  /** */
  homeCountry?: AccountCountryInfoRequest;

  /** */
  timezone?: AccountTimezoneInfoRequest;

  /** */
  language?: AccountLanguageInfoRequest;

  /** */
  greetingLanguage?: AccountGreetingLanguageInfoRequest;

  /** */
  formattingLocale?: AccountFormattingLocaleInfoRequest;

  /**
   * Time format (12-hours or 24-hours).
   * Default: 12h
   */
  timeFormat?: "12h" | "24h";
}

export default AccountRegionalSettingRequest;
