import TMTeamInfo from "./TMTeamInfo";
import TMNavigationInfo from "./TMNavigationInfo";

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
