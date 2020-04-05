import CustomGreetingAnsweringRuleInfo from './CustomGreetingAnsweringRuleInfo'
import CustomCompanyGreetingLanguageInfo from './CustomCompanyGreetingLanguageInfo'

class CustomCompanyGreetingInfo
{
    /// <summary>
    /// Link to an extension custom greeting
    /// </summary>
    uri: string

    /// <summary>
    /// Internal identifier of an answering rule
    /// </summary>
    id: string

    /// <summary>
    /// Type of a company greeting
    /// Enum: Company, StartRecording, StopRecording, AutomaticRecording
    /// </summary>
    type: string

    /// <summary>
    /// Content media type
    /// Enum: audio/mpeg, audio/wav
    /// </summary>
    contentType: string

    /// <summary>
    /// Link to a greeting content (audio file)
    /// </summary>
    contentUri: string

    /// <summary>
    /// Information on an answering rule that the greeting is applied to
    /// </summary>
    answeringRule: CustomGreetingAnsweringRuleInfo

    /// <summary>
    /// Information on a greeting language. Supported for types 'StopRecording', 'StartRecording', 'AutomaticRecording'
    /// </summary>
    language: CustomCompanyGreetingLanguageInfo
}

export default CustomCompanyGreetingInfo