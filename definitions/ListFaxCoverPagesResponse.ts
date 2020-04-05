import FaxCoverPageInfo from './FaxCoverPageInfo'
import MessagingNavigationInfo from './MessagingNavigationInfo'
import MessagingPagingInfo from './MessagingPagingInfo'

class ListFaxCoverPagesResponse
{
    /**
     */
    uri: string

    /**
     */
    records: FaxCoverPageInfo[]

    /**
     * Information on navigation
     */
    navigation: MessagingNavigationInfo

    /**
     * Information on paging
     */
    paging: MessagingPagingInfo
}

export default ListFaxCoverPagesResponse