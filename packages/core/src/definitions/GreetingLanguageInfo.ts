/**
 * Information on language used for telephony greetings
 */
interface GreetingLanguageInfo {
  /**
   * Internal identifier of a greeting language
   */
  id?: string;

  /**
   * Localization code of a greeting language
   */
  localeCode?: string;

  /**
   * Official name of a greeting language
   */
  name?: string;
}

export default GreetingLanguageInfo;
