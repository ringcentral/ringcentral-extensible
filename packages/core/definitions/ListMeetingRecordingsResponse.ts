import {
  MeetingRecording,
  MeetingRecordingsPagingInfo,
  MeetingRecordingsNavigationInfo,
} from './index';

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
