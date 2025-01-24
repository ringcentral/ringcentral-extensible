import type MeetingRecordings from "./MeetingRecordings";
import type EnumeratedPagingModel from "./EnumeratedPagingModel";
import type PageNavigationModel from "./PageNavigationModel";

interface ListMeetingRecordingsResponse {
  /** */
  records?: MeetingRecordings[];

  /** */
  paging?: EnumeratedPagingModel;

  /** */
  navigation?: PageNavigationModel;
}

export default ListMeetingRecordingsResponse;
