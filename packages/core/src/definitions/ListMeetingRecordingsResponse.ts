import MeetingRecordings from "./MeetingRecordings";
import EnumeratedPagingModel from "./EnumeratedPagingModel";
import PageNavigationModel from "./PageNavigationModel";

interface ListMeetingRecordingsResponse {
  /** */
  records?: MeetingRecordings[];

  /** */
  paging?: EnumeratedPagingModel;

  /** */
  navigation?: PageNavigationModel;
}

export default ListMeetingRecordingsResponse;
