/**
 * For 'TextToSpeech' mode only. Prompt language metadata
*/
interface PromptLanguageInfo {
  /**
   * Link to a prompt language
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

export default PromptLanguageInfo;
