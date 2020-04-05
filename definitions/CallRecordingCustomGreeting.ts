import CallRecordingCustomGreetingData from './CallRecordingCustomGreetingData'
import CallRecordingCustomGreetingLanguage from './CallRecordingCustomGreetingLanguage'

class CallRecordingCustomGreeting
{
    /**
     * Enum: StartRecording, StopRecording, AutomaticRecording
     */
    type?: string

    /**
     * Custom greeting data
     */
    custom?: CallRecordingCustomGreetingData

    /**
     * Custom greeting language
     */
    language?: CallRecordingCustomGreetingLanguage
}

export default CallRecordingCustomGreeting