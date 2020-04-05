import ForwardingNumberInfo from './ForwardingNumberInfo'
import CallHandlingNavigationInfo from './CallHandlingNavigationInfo'
import CallHandlingPagingInfo from './CallHandlingPagingInfo'

class GetExtensionForwardingNumberListResponse
{
  /**
   * Link to the forwarding number list resource
   */
  uri?: string

  /**
   * List of forwarding phone numbers
   */
  records?: ForwardingNumberInfo[]

  /**
   * Information on navigation
   */
  navigation?: CallHandlingNavigationInfo

  /**
   * Information on paging
   */
  paging?: CallHandlingPagingInfo
}

export default GetExtensionForwardingNumberListResponse
