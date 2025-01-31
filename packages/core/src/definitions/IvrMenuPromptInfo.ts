import AudioPromptInfo from "./AudioPromptInfo.js";
import PromptLanguageInfo from "./PromptLanguageInfo.js";

/**
 * Prompt metadata
 */
interface IvrMenuPromptInfo {
  /**
   * Prompt mode: custom media or text
   */
  mode?: "Audio" | "TextToSpeech";

  /** */
  audio?: AudioPromptInfo;

  /**
   * For 'TextToSpeech' mode only. Prompt text
   */
  text?: string;

  /** */
  language?: PromptLanguageInfo;
}

export default IvrMenuPromptInfo;
