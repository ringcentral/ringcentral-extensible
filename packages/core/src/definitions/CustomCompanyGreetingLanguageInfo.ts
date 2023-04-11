/**
 * Information on a greeting language. Supported for types 'StopRecording', 'StartRecording', 'AutomaticRecording'
*/
interface CustomCompanyGreetingLanguageInfo {
  /**
   * Internal identifier of a greeting language
   */
  id?: string;

  /**
   * Link to a greeting language
   * Format: uri
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
