import type TMTaskInfo from "./TMTaskInfo.js";
import type TMNavigationInfo from "./TMNavigationInfo.js";

interface TMTaskList {
  /**
   */
  records?: TMTaskInfo[];

  /**
   */
  navigation?: TMNavigationInfo;
}

export default TMTaskList;
