import FaxCoverPageInfo from './FaxCoverPageInfo'
import MessagingNavigationInfo from './MessagingNavigationInfo'
import MessagingPagingInfo from './MessagingPagingInfo'

class ListFaxCoverPagesResponse
{
    /// <summary>
    /// </summary>
    uri: string

    /// <summary>
    /// </summary>
    records: FaxCoverPageInfo[]

    /// <summary>
    /// Information on navigation
    /// </summary>
    navigation: MessagingNavigationInfo

    /// <summary>
    /// Information on paging
    /// </summary>
    paging: MessagingPagingInfo
}

export default ListFaxCoverPagesResponse