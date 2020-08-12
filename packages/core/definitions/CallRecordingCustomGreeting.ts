import {
  CallRecordingCustomGreetingData,
  CallRecordingCustomGreetingLanguage,
} from './index';

class CallRecordingCustomGreeting {
  /**
   */
  type?: 'StartRecording' | 'StopRecording' | 'AutomaticRecording';

  /**
   * Custom greeting data
   */
  custom?: CallRecordingCustomGreetingData;

  /**
   * Custom greeting language
   */
  language?: CallRecordingCustomGreetingLanguage;
}

export default CallRecordingCustomGreeting;
