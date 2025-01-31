import TMPostInfo from "./TMPostInfo.js";
import TMNavigationInfo from "./TMNavigationInfo.js";

interface TMPostsList {
  /**
   * List of posts
   * Required
   */
  records?: TMPostInfo[];

  /** */
  navigation?: TMNavigationInfo;
}

export default TMPostsList;
