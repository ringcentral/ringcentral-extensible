import CallRecordingCustomGreetingData from './CallRecordingCustomGreetingData'
import CallRecordingCustomGreetingLanguage from './CallRecordingCustomGreetingLanguage'

class CallRecordingCustomGreeting
{
    /// <summary>
    /// Enum: StartRecording, StopRecording, AutomaticRecording
    /// </summary>
    type: string

    /// <summary>
    /// Custom greeting data
    /// </summary>
    custom: CallRecordingCustomGreetingData

    /// <summary>
    /// Custom greeting language
    /// </summary>
    language: CallRecordingCustomGreetingLanguage
}

export default CallRecordingCustomGreeting