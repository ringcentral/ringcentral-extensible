import {GlipTeamInfo, GlipNavigationInfo} from './index';

class GlipTeamsList {
  /**
   * List of teams
   * Required
   */
  records?: GlipTeamInfo[];

  /**
   */
  navigation?: GlipNavigationInfo;
}

export default GlipTeamsList;
