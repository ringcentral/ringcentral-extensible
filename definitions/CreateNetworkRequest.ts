import AutomaticLocationUpdatesSiteInfo from './AutomaticLocationUpdatesSiteInfo'
import PublicIpRangeInfo from './PublicIpRangeInfo'
import PrivateIpRangeInfoRequest from './PrivateIpRangeInfoRequest'

class CreateNetworkRequest
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
    privateIpRanges: PrivateIpRangeInfoRequest[]
}

export default CreateNetworkRequest