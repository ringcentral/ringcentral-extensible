import type TMTeamInfo from "./TMTeamInfo.js";
import type TMNavigationInfo from "./TMNavigationInfo.js";

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
