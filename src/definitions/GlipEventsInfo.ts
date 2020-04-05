import GlipEventInfo from './GlipEventInfo'
import GlipNavigationInfo from './GlipNavigationInfo'

class GlipEventsInfo
{
  /**
   * List of events created by the current user
   */
  records?: GlipEventInfo[]

  /**
   */
  navigation?: GlipNavigationInfo
}

export default GlipEventsInfo
