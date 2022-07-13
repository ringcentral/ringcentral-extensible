import GlipPostInfo from './GlipPostInfo';
import GlipNavigationInfo from './GlipNavigationInfo';

interface GlipPostsList {
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
