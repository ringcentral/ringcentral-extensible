import {GlipPostInfo, GlipNavigationInfo} from '.';

class GlipPostsList {
  /**
   * List of posts
   * Required
   */
  records?: GlipPostInfo[];

  /**
   */
  navigation?: GlipNavigationInfo;
}

export default GlipPostsList;
