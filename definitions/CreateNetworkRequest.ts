import AutomaticLocationUpdatesSiteInfo from './AutomaticLocationUpdatesSiteInfo'
import PublicIpRangeInfo from './PublicIpRangeInfo'
import PrivateIpRangeInfoRequest from './PrivateIpRangeInfoRequest'

class CreateNetworkRequest
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
    privateIpRanges: PrivateIpRangeInfoRequest[]
}

export default CreateNetworkRequest