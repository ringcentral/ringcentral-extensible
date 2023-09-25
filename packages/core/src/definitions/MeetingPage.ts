import type Meeting from './Meeting';
import type Paging from './Paging';

/**
 * Meetings page
 */
interface MeetingPage {
  /**
   * meetings array
   */
  meetings?: Meeting[];

  /**
   */
  paging?: Paging;
}

export default MeetingPage;
