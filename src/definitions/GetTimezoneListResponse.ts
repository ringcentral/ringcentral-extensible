import { GetTimezoneInfoResponse, ProvisioningNavigationInfo, ProvisioningPagingInfo } from '.'

class GetTimezoneListResponse
{
  /**
   * Link to the timezone list resource
   */
  uri?: string

  /**
   * List of timezones
   * Required
   */
  records?: GetTimezoneInfoResponse[]

  /**
   * Information on navigation
   * Required
   */
  navigation?: ProvisioningNavigationInfo

  /**
   * Information on paging
   * Required
   */
  paging?: ProvisioningPagingInfo
}

export default GetTimezoneListResponse
