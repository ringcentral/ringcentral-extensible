import CallQueueInfo from "./CallQueueInfo.js";

interface CallQueueOverflowSettings {
  /**
   * Call queue overflow status
   */
  enabled?: boolean;

  /**
   * Extension subtype, if applicable.
   *  For unrecognized subtypes the `Unknown` value is returned
   */
  subType?:
    | "VideoPro"
    | "VideoProPlus"
    | "DigitalSignageOnlyRooms"
    | "Unknown"
    | "Emergency";

  /**
   */
  items?: CallQueueInfo[];
}

export default CallQueueOverflowSettings;
