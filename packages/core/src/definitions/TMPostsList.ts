import type TMPostInfo from "./TMPostInfo";
import type TMNavigationInfo from "./TMNavigationInfo";

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
