import Meeting from "./Meeting.js";
import BasicPaging from "./BasicPaging.js";

/**
 * Meetings page
 */
interface MeetingPage {
  /**
   * Meetings array
   * Required
   */
  meetings?: Meeting[];

  /**
   * Required
   */
  paging?: BasicPaging;
}

export default MeetingPage;
