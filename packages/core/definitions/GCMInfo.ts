import {GCMData} from './index';

class GCMInfo {
  /**
   * Notification priority, if the value is 'high' then notification is turned on even if the application is in background
   */
  priority?: 'high' | 'normal';

  /**
   * Notification lifetime value in seconds, the default value is 30 seconds
   */
  time_to_live?: number;

  /**
   * GCM data
   */
  data?: GCMData;
}

export default GCMInfo;
