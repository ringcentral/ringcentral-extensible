import Host from './Host';
import Participant from './Participant';
import Recording from './Recording';

/**
 * Meeting information
*/
interface Meeting {
  /**
   * call id
   * Required
   */
  id?: string;

  /**
   * bridge id
   * Required
   */
  bridgeId?: string;

  /**
   * short bridge id
   * Required
   */
  shortId?: string;

  /**
   * start time ISO 8601
   * Required
   * Format: date-time
   */
  startTime?: string;

  /**
   * duration second
   * Format: int32
   * Example: 36
   */
  duration?: number;

  /**
   * meetings name
   * Required
   */
  displayName?: string;

  /**
   * meeting type
   * Required
   */
  type?: ('Meeting' | 'Call');

  /**
   * meeting status
   * Required
   */
  status?: ('InProgress' | 'Done');

  /**
   * Required
   */
  hostInfo?: Host;

  /**
   * chat id
   */
  chatId?: string;

  /**
   * participants list
   * Required
   */
  participants?: Participant[];

  /**
   * recording information
   */
  recordings?: Recording[];

  /**
   * chat location
   */
  chatUrl?: string;
}

export default Meeting;
