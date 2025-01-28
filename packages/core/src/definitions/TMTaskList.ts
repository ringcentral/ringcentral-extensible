import TMTaskInfo from "./TMTaskInfo";
import TMNavigationInfo from "./TMNavigationInfo";

interface TMTaskList {
  /** */
  records?: TMTaskInfo[];

  /** */
  navigation?: TMNavigationInfo;
}

export default TMTaskList;
