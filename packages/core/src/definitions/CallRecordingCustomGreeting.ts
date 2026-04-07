import type CallRecordingCustomGreetingData from "./CallRecordingCustomGreetingData.js";
import type CallRecordingCustomGreetingLanguage from "./CallRecordingCustomGreetingLanguage.js";

interface CallRecordingCustomGreeting {
  /**
   */
  type?: "StartRecording" | "StopRecording" | "AutomaticRecording";

  /**
   */
  custom?: CallRecordingCustomGreetingData;

  /**
   */
  language?: CallRecordingCustomGreetingLanguage;
}

export default CallRecordingCustomGreeting;
