import MeetingRecordings from "./MeetingRecordings.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import PageNavigationModel from "./PageNavigationModel.js";

interface ListMeetingRecordingsResponse {
  /** */
  records?: MeetingRecordings[];

  /** */
  paging?: EnumeratedPagingModel;

  /** */
  navigation?: PageNavigationModel;
}

export default ListMeetingRecordingsResponse;
