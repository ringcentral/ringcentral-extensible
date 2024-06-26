import type AudioPromptInfo from './AudioPromptInfo';
import type PromptLanguageInfo from './PromptLanguageInfo';

/**
 * Prompt metadata
 */
interface IvrMenuPromptInfo {
  /**
   * Prompt mode: custom media or text
   */
  mode?: 'Audio' | 'TextToSpeech';

  /**
   */
  audio?: AudioPromptInfo;

  /**
   * For 'TextToSpeech' mode only. Prompt text
   */
  text?: string;

  /**
   */
  language?: PromptLanguageInfo;
}

export default IvrMenuPromptInfo;
