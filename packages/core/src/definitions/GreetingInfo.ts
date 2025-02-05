import PresetInfo from "./PresetInfo.js";
import CustomGreetingInfoRequest from "./CustomGreetingInfoRequest.js";

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

  /** */
  preset?: PresetInfo;

  /** */
  custom?: CustomGreetingInfoRequest;
}

export default GreetingInfo;
