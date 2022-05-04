import CallRecordingCustomGreetingData from './CallRecordingCustomGreetingData';
import CallRecordingCustomGreetingLanguage from './CallRecordingCustomGreetingLanguage';

class CallRecordingCustomGreeting {
  /**
   */
  type?: ('StartRecording' | 'StopRecording' | 'AutomaticRecording');

  /**
   */
  custom?: CallRecordingCustomGreetingData;

  /**
   */
  language?: CallRecordingCustomGreetingLanguage;
}

export default CallRecordingCustomGreeting;
