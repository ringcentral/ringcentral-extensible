import { AutomaticLocationUpdatesSiteInfo, PublicIpRangeInfo, PrivateIpRangeInfo } from '.'

class NetworkInfo
{
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
  privateIpRanges?: PrivateIpRangeInfo[]
}

export default NetworkInfo
