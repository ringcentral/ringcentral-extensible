import GlipTeamInfo from './GlipTeamInfo';
import GlipNavigationInfo from './GlipNavigationInfo';

interface GlipTeamsList {
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
