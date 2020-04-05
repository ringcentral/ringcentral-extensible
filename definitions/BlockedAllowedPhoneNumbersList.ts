import BlockedAllowedPhoneNumberInfo from './BlockedAllowedPhoneNumberInfo'
import CallHandlingNavigationInfo from './CallHandlingNavigationInfo'
import CallHandlingPagingInfo from './CallHandlingPagingInfo'

    // List of blocked or allowed phone numbers
class BlockedAllowedPhoneNumbersList
{
    /// <summary>
    /// Link to a list of blocked/allowed phone numbers resource
    /// </summary>
    uri: string

    /// <summary>
    /// </summary>
    records: BlockedAllowedPhoneNumberInfo[]

    /// <summary>
    /// Information on navigation
    /// </summary>
    navigation: CallHandlingNavigationInfo

    /// <summary>
    /// Information on paging
    /// </summary>
    paging: CallHandlingPagingInfo
}

export default BlockedAllowedPhoneNumbersList