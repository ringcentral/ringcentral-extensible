import Meeting from './Meeting';
import Paging from './Paging';

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
