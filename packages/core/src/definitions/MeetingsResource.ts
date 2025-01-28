import MeetingResponseResource from "./MeetingResponseResource";
import EnumeratedPagingModel from "./EnumeratedPagingModel";
import PageNavigationModel from "./PageNavigationModel";

interface MeetingsResource {
  /**
   * Format: uri
   */
  uri?: string;

  /** */
  records?: MeetingResponseResource[];

  /** */
  paging?: EnumeratedPagingModel;

  /** */
  navigation?: PageNavigationModel;
}

export default MeetingsResource;
