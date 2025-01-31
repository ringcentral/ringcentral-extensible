import CallSegmentLengthFilter from "./CallSegmentLengthFilter.js";

interface CallSegmentFilter {
  /**
   * Call segment for filtering
   * Required
   */
  segment?:
    | "Ringing"
    | "LiveTalk"
    | "Hold"
    | "Park"
    | "Transfer"
    | "IvrPrompt"
    | "Voicemail"
    | "VmGreeting"
    | "Setup";

  /** */
  length?: CallSegmentLengthFilter;
}

export default CallSegmentFilter;
