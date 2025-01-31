import TMTaskInfo from "./TMTaskInfo.js";
import TMNavigationInfo from "./TMNavigationInfo.js";

interface TMTaskList {
  /** */
  records?: TMTaskInfo[];

  /** */
  navigation?: TMNavigationInfo;
}

export default TMTaskList;
