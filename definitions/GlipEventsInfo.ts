import GlipEventInfo from './GlipEventInfo'
import GlipNavigationInfo from './GlipNavigationInfo'

class GlipEventsInfo
{
    /// <summary>
    /// List of events created by the current user
    /// </summary>
    records: GlipEventInfo[]

    /// <summary>
    /// </summary>
    navigation: GlipNavigationInfo
}

export default GlipEventsInfo