import type TMNavigationInfo from "./TMNavigationInfo.js";
import type TMPostInfo from "./TMPostInfo.js";

interface TMPostsList {
  /**
   * List of posts
   * Required
   */
  records?: TMPostInfo[];

  /**
   */
  navigation?: TMNavigationInfo;
}

export default TMPostsList;
