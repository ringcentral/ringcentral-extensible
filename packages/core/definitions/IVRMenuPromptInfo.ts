import {AudioPromptInfo, PromptLanguageInfo} from './index';

/**
 * Prompt metadata
 */
class IVRMenuPromptInfo {
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
export default IVRMenuPromptInfo;
