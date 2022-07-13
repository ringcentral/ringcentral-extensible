/**
 * For 'Audio' mode only. Prompt media reference
*/
interface AudioPromptInfo {
  /**
   * Link to a prompt audio file
   */
  uri?: string;

  /**
   * Internal identifier of a prompt
   */
  id?: string;
}

export default AudioPromptInfo;
