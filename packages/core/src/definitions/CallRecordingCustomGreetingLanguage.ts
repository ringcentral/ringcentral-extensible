/**
 * Custom greeting language
*/
interface CallRecordingCustomGreetingLanguage {
  /**
   * Link to a language
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a language
   */
  id?: string;

  /**
   * Language name
   */
  name?: string;

  /**
   * Language locale code
   */
  localeCode?: string;
}

export default CallRecordingCustomGreetingLanguage;
