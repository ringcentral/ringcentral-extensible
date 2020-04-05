import GlipPostInfo from './GlipPostInfo'
import GlipNavigationInfo from './GlipNavigationInfo'

class GlipPostsList
{
    /**
     * List of posts
     * Required
     */
    records: GlipPostInfo[]

    /**
     */
    navigation: GlipNavigationInfo
}

export default GlipPostsList