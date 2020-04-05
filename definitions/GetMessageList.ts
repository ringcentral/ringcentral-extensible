import GetMessageInfoResponse from './GetMessageInfoResponse'
import MessagingNavigationInfo from './MessagingNavigationInfo'
import MessagingPagingInfo from './MessagingPagingInfo'

class GetMessageList
{
    /// <summary>
    /// Link to the list of user messages
    /// </summary>
    uri: string

    /// <summary>
    /// List of records with message information
    /// Required
    /// </summary>
    records: GetMessageInfoResponse[]

    /// <summary>
    /// Information on navigation
    /// Required
    /// </summary>
    navigation: MessagingNavigationInfo

    /// <summary>
    /// Information on paging
    /// Required
    /// </summary>
    paging: MessagingPagingInfo
}

export default GetMessageList