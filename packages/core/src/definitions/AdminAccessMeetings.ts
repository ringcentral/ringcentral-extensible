import AdminAccessMeeting from "./AdminAccessMeeting.js";
import Paging from "./Paging.js";

/**
 * Meetings page
 */
interface AdminAccessMeetings {
  /**
   * Meetings array
   * Required
   */
  meetings?: AdminAccessMeeting[];

  /**
   * Required
   */
  paging?: Paging;
}

export default AdminAccessMeetings;
