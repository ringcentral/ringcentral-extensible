import MeetingResponseResource from "./MeetingResponseResource.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import PageNavigationModel from "./PageNavigationModel.js";

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
