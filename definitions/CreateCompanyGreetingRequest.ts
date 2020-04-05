import Attachment from './Attachment'
import CustomCompanyGreetingAnsweringRuleInfo from './CustomCompanyGreetingAnsweringRuleInfo'

class CreateCompanyGreetingRequest
{
    /**
     * Type of a greeting, specifying the case when the greeting is played.
     * Enum: Company, StartRecording, StopRecording, AutomaticRecording
     */
    type: string

    /**
     * Internal identifier of a language. See Get Language List
     */
    languageId: string

    /**
     * Meida file to upload
     */
    binary: Attachment

    /**
     */
    answeringRule: CustomCompanyGreetingAnsweringRuleInfo
}

export default CreateCompanyGreetingRequest