import GlipPostInfo from './GlipPostInfo'
import GlipNavigationInfo from './GlipNavigationInfo'

class GlipPosts
{
  /**
   * List of posts
   * Required
   */
  records?: GlipPostInfo[]

  /**
   */
  navigation?: GlipNavigationInfo
}

export default GlipPosts
