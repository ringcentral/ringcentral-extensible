import {TimeInterval} from './index';

// Weekly schedule
class WeeklyScheduleInfo {
  /**
   * Time intervals for a particular day
   */
  monday?: TimeInterval[];

  /**
   * Time intervals for a particular day
   */
  tuesday?: TimeInterval[];

  /**
   * Time intervals for a particular day
   */
  wednesday?: TimeInterval[];

  /**
   * Time intervals for a particular day
   */
  thursday?: TimeInterval[];

  /**
   * Time intervals for a particular day
   */
  friday?: TimeInterval[];

  /**
   * Time intervals for a particular day
   */
  saturday?: TimeInterval[];

  /**
   * Time intervals for a particular day
   */
  sunday?: TimeInterval[];
}
export default WeeklyScheduleInfo;
