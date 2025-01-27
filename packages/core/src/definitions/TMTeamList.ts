import TMTeamInfo from "./TMTeamInfo.js";
import TMNavigationInfo from "./TMNavigationInfo.js";

interface TMTeamList {
  /**
   * List of teams
   * Required
   */
  records?: TMTeamInfo[];

  /** */
  navigation?: TMNavigationInfo;
}

export default TMTeamList;
