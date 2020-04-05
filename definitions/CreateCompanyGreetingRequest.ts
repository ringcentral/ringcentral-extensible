import Attachment from './Attachment'
import CustomCompanyGreetingAnsweringRuleInfo from './CustomCompanyGreetingAnsweringRuleInfo'

class CreateCompanyGreetingRequest
{
    /// <summary>
    /// Type of a greeting, specifying the case when the greeting is played.
    /// Enum: Company, StartRecording, StopRecording, AutomaticRecording
    /// </summary>
    type: string

    /// <summary>
    /// Internal identifier of a language. See Get Language List
    /// </summary>
    languageId: string

    /// <summary>
    /// Meida file to upload
    /// </summary>
    binary: Attachment

    /// <summary>
    /// </summary>
    answeringRule: CustomCompanyGreetingAnsweringRuleInfo
}

export default CreateCompanyGreetingRequest