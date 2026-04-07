import type BasicPaging from "./BasicPaging.js";
import type Meeting from "./Meeting.js";

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
