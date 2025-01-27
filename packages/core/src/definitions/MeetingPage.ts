import Meeting from "./Meeting.js";
import Paging from "./Paging.js";

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
  paging?: Paging;
}

export default MeetingPage;
