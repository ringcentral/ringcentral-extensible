import { GlipEventInfo, GlipNavigationInfo } from './index';

class GlipEventsInfo {
  /**
   * List of events created by the current user
   */
  records?: GlipEventInfo[];

  /**
   */
  navigation?: GlipNavigationInfo;
}
export default GlipEventsInfo;
