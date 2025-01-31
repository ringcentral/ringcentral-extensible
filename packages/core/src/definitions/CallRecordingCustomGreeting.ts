import CallRecordingCustomGreetingData from "./CallRecordingCustomGreetingData.js";
import CallRecordingCustomGreetingLanguage from "./CallRecordingCustomGreetingLanguage.js";

interface CallRecordingCustomGreeting {
  /** */
  type?: "StartRecording" | "StopRecording" | "AutomaticRecording";

  /** */
  custom?: CallRecordingCustomGreetingData;

  /** */
  language?: CallRecordingCustomGreetingLanguage;
}

export default CallRecordingCustomGreeting;
