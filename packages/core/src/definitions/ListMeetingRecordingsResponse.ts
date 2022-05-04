import MeetingRecording from './MeetingRecording';
import MeetingRecordingsPagingInfo from './MeetingRecordingsPagingInfo';
import MeetingRecordingsNavigationInfo from './MeetingRecordingsNavigationInfo';

class ListMeetingRecordingsResponse {
  /**
   */
  records?: MeetingRecording[];

  /**
   */
  paging?: MeetingRecordingsPagingInfo;

  /**
   */
  navigation?: MeetingRecordingsNavigationInfo;
}

export default ListMeetingRecordingsResponse;
