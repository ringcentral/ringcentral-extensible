import { AutomaticLocationUpdatesSiteInfo, PublicIpRangeInfo, PrivateIpRangeInfoRequest } from '.'

class UpdateNetworkRequest {
  /**
   */
  name?: string

  /**
   */
  site?: AutomaticLocationUpdatesSiteInfo

  /**
   */
  publicIpRanges?: PublicIpRangeInfo[]

  /**
   */
  privateIpRanges?: PrivateIpRangeInfoRequest[]
}

export default UpdateNetworkRequest
