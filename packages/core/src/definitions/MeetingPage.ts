import type Meeting from "./Meeting.js";
import type BasicPaging from "./BasicPaging.js";

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
