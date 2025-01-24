import type MeetingInfo from "./MeetingInfo";
import type MeetingRecordingInfo from "./MeetingRecordingInfo";

interface MeetingRecordings {
  /** */
  meeting?: MeetingInfo;

  /** */
  recordings?: MeetingRecordingInfo[];
}

export default MeetingRecordings;
