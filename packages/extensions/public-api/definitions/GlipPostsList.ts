import {GlipPostInfo, GlipNavigationInfo} from './index';

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
