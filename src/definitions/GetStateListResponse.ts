import { GetStateInfoResponse, ProvisioningNavigationInfo, ProvisioningPagingInfo } from '.'

class GetStateListResponse
{
  /**
   * Link to the states list resource
   */
  uri?: string

  /**
   * List of states
   */
  records?: GetStateInfoResponse[]

  /**
   * Information on navigation
   */
  navigation?: ProvisioningNavigationInfo

  /**
   * Information on paging
   */
  paging?: ProvisioningPagingInfo
}

export default GetStateListResponse
