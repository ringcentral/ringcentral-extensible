import type TMEventInfo from "./TMEventInfo.js";
import type TMNavigationInfo from "./TMNavigationInfo.js";

interface TMEventList {
  /**
   * List of events created by the current user
   */
  records?: TMEventInfo[];

  /**
   */
  navigation?: TMNavigationInfo;
}

export default TMEventList;
