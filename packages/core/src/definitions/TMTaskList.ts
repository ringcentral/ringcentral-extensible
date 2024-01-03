import type TMTaskInfo from './TMTaskInfo';
import type TMNavigationInfo from './TMNavigationInfo';

interface TMTaskList {
  /**
   */
  records?: TMTaskInfo[];

  /**
   */
  navigation?: TMNavigationInfo;
}

export default TMTaskList;
