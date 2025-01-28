import MeetingInfo from "./MeetingInfo";
import MeetingRecordingInfo from "./MeetingRecordingInfo";

interface MeetingRecordings {
  /** */
  meeting?: MeetingInfo;

  /** */
  recordings?: MeetingRecordingInfo[];
}

export default MeetingRecordings;
