/**
 * Information on a greeting language. Supported for types 'StopRecording', 'StartRecording', 'AutomaticRecording'
*/
class CustomCompanyGreetingLanguageInfo {
  /**
   * Internal identifier of a greeting language
   */
  id?: string;

  /**
   * Link to a greeting language
   */
  uri?: string;

  /**
   * Name of a greeting language
   */
  name?: string;

  /**
   * Locale code of a greeting language
   */
  localeCode?: string;
}
export default CustomCompanyGreetingLanguageInfo;
