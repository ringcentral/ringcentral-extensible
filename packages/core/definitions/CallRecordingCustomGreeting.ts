import {
  CallRecordingCustomGreetingData,
  CallRecordingCustomGreetingLanguage,
} from './index';

class CallRecordingCustomGreeting {
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
