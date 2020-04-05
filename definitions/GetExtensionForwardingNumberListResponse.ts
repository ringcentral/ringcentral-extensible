import ForwardingNumberInfo from './ForwardingNumberInfo'
import CallHandlingNavigationInfo from './CallHandlingNavigationInfo'
import CallHandlingPagingInfo from './CallHandlingPagingInfo'

class GetExtensionForwardingNumberListResponse
{
    /// <summary>
    /// Link to the forwarding number list resource
    /// </summary>
    uri: string

    /// <summary>
    /// List of forwarding phone numbers
    /// </summary>
    records: ForwardingNumberInfo[]

    /// <summary>
    /// Information on navigation
    /// </summary>
    navigation: CallHandlingNavigationInfo

    /// <summary>
    /// Information on paging
    /// </summary>
    paging: CallHandlingPagingInfo
}

export default GetExtensionForwardingNumberListResponse