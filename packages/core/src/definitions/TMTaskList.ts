import type TMNavigationInfo from "./TMNavigationInfo.js";
import type TMTaskInfo from "./TMTaskInfo.js";

interface TMTaskList {
  /**
   */
  records?: TMTaskInfo[];

  /**
   */
  navigation?: TMNavigationInfo;
}

export default TMTaskList;
