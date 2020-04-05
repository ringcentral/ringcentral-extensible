import AutomaticLocationUpdatesSiteInfo from './AutomaticLocationUpdatesSiteInfo'
import PublicIpRangeInfo from './PublicIpRangeInfo'
import PrivateIpRangeInfo from './PrivateIpRangeInfo'

class NetworkInfo
{
    /// <summary>
    /// </summary>
    name: string

    /// <summary>
    /// </summary>
    site: AutomaticLocationUpdatesSiteInfo

    /// <summary>
    /// </summary>
    publicIpRanges: PublicIpRangeInfo[]

    /// <summary>
    /// </summary>
    privateIpRanges: PrivateIpRangeInfo[]
}

export default NetworkInfo