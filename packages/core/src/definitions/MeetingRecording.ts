import MeetingInfo from './MeetingInfo';
import MeetingRecordingInfo from './MeetingRecordingInfo';

interface MeetingRecording {
  /**
   */
  meeting?: MeetingInfo;

  /**
   */
  recording?: MeetingRecordingInfo[];
}

export default MeetingRecording;
