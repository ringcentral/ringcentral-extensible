import {
  MeetingRecording,
  MeetingRecordingsPagingInfo,
  MeetingRecordingsNavigationInfo,
} from '.';

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
