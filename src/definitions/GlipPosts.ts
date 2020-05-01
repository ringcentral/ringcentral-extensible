import {GlipPostInfo, GlipNavigationInfo} from '.';

class GlipPosts {
  /**
   * List of posts
   * Required
   */
  records?: GlipPostInfo[];

  /**
   */
  navigation?: GlipNavigationInfo;
}

export default GlipPosts;
