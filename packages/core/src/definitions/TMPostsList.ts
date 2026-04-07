import type TMPostInfo from "./TMPostInfo.js";
import type TMNavigationInfo from "./TMNavigationInfo.js";

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
