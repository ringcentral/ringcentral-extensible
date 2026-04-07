import type AdminAccessMeeting from "./AdminAccessMeeting.js";
import type Paging from "./Paging.js";

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
