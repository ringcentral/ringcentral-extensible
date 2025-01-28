import TMPostInfo from "./TMPostInfo";
import TMNavigationInfo from "./TMNavigationInfo";

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
