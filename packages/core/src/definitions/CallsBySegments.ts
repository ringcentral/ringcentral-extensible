import type CallsBySegmentsBreakdown from "./CallsBySegmentsBreakdown";

/**
 * Data for calls with breakdown by segments (Ringing, LiveTalk, Hold, Park, Transfer, IvrPrompt, Voicemail, VmGreeting, Setup)
 */
interface CallsBySegments {
  /**
   * Unit of the result value
   * Required
   */
  valueType?: "Percent" | "Seconds" | "Instances";

  /**
   * Required
   */
  values?: CallsBySegmentsBreakdown;
}

export default CallsBySegments;
