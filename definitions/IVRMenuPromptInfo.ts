import AudioPromptInfo from './AudioPromptInfo'
import PromptLanguageInfo from './PromptLanguageInfo'

class IVRMenuPromptInfo
{
    /// <summary>
    /// Prompt mode: custom media or text
    /// Enum: Audio, TextToSpeech
    /// </summary>
    mode: string

    /// <summary>
    /// For 'Audio' mode only. Prompt media reference
    /// </summary>
    audio: AudioPromptInfo

    /// <summary>
    /// For 'TextToSpeech' mode only. Prompt text
    /// </summary>
    text: string

    /// <summary>
    /// For 'TextToSpeech' mode only. Prompt language metadata
    /// </summary>
    language: PromptLanguageInfo
}

export default IVRMenuPromptInfo