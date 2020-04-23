import { AudioPromptInfo, PromptLanguageInfo } from '.'

class IVRMenuPromptInfo {
  /**
   * Prompt mode: custom media or text
   */
  mode?: ('Audio' | 'TextToSpeech')

  /**
   * For 'Audio' mode only. Prompt media reference
   */
  audio?: AudioPromptInfo

  /**
   * For 'TextToSpeech' mode only. Prompt text
   */
  text?: string

  /**
   * For 'TextToSpeech' mode only. Prompt language metadata
   */
  language?: PromptLanguageInfo
}

export default IVRMenuPromptInfo
