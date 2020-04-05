import AutomaticLocationUpdatesSiteInfo from './AutomaticLocationUpdatesSiteInfo'
import PublicIpRangeInfo from './PublicIpRangeInfo'
import PrivateIpRangeInfo from './PrivateIpRangeInfo'

class NetworkInfo
{
    /**
     */
    name: string

    /**
     */
    site: AutomaticLocationUpdatesSiteInfo

    /**
     */
    publicIpRanges: PublicIpRangeInfo[]

    /**
     */
    privateIpRanges: PrivateIpRangeInfo[]
}

export default NetworkInfo