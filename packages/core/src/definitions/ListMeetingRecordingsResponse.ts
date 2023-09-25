import type MeetingRecordings from './MeetingRecordings';
import type MeetingRecordingsPagingInfo from './MeetingRecordingsPagingInfo';
import type MeetingRecordingsNavigationInfo from './MeetingRecordingsNavigationInfo';

interface ListMeetingRecordingsResponse {
  /**
   */
  records?: MeetingRecordings[];

  /**
   */
  paging?: MeetingRecordingsPagingInfo;

  /**
   */
  navigation?: MeetingRecordingsNavigationInfo;
}

export default ListMeetingRecordingsResponse;
