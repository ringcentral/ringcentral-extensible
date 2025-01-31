import MeetingInfo from "./MeetingInfo.js";
import MeetingRecordingInfo from "./MeetingRecordingInfo.js";

interface MeetingRecordings {
  /** */
  meeting?: MeetingInfo;

  /** */
  recordings?: MeetingRecordingInfo[];
}

export default MeetingRecordings;
