import Meeting from "./Meeting";
import Paging from "./Paging";

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
