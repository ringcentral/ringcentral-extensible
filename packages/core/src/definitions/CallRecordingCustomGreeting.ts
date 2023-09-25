import type CallRecordingCustomGreetingData from './CallRecordingCustomGreetingData';
import type CallRecordingCustomGreetingLanguage from './CallRecordingCustomGreetingLanguage';

interface CallRecordingCustomGreeting {
  /**
   */
  type?: 'StartRecording' | 'StopRecording' | 'AutomaticRecording';

  /**
   */
  custom?: CallRecordingCustomGreetingData;

  /**
   */
  language?: CallRecordingCustomGreetingLanguage;
}

export default CallRecordingCustomGreeting;
