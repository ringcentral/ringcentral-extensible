import TMEventInfo from "./TMEventInfo";
import TMNavigationInfo from "./TMNavigationInfo";

interface TMEventList {
  /**
   * List of events created by the current user
   */
  records?: TMEventInfo[];

  /** */
  navigation?: TMNavigationInfo;
}

export default TMEventList;
