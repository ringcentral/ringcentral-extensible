import type TMTeamInfo from './TMTeamInfo';
import type TMNavigationInfo from './TMNavigationInfo';

interface TMTeamList {
  /**
   * List of teams
   * Required
   */
  records?: TMTeamInfo[];

  /**
   */
  navigation?: TMNavigationInfo;
}

export default TMTeamList;
