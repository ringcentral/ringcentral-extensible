import type CustomGreetingInfoRequest from "./CustomGreetingInfoRequest.js";
import type PresetInfo from "./PresetInfo.js";

interface GreetingInfo {
  /**
   * Type of greeting, specifying the case when the greeting is played.
   */
  type?:
    | "Introductory"
    | "Announcement"
    | "AutomaticRecording"
    | "BlockedCallersAll"
    | "BlockedCallersSpecific"
    | "BlockedNoCallerId"
    | "BlockedPayPhones"
    | "ConnectingMessage"
    | "ConnectingAudio"
    | "StartRecording"
    | "StopRecording"
    | "Voicemail"
    | "Unavailable"
    | "InterruptPrompt"
    | "HoldMusic"
    | "Company";

  /**
   */
  preset?: PresetInfo;

  /**
   */
  custom?: CustomGreetingInfoRequest;
}

export default GreetingInfo;
