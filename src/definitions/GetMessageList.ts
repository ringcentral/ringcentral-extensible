import { GetMessageInfoResponse, MessagingNavigationInfo, MessagingPagingInfo } from '.'

class GetMessageList
{
  /**
   * Link to the list of user messages
   */
  uri?: string

  /**
   * List of records with message information
   * Required
   */
  records?: GetMessageInfoResponse[]

  /**
   * Information on navigation
   * Required
   */
  navigation?: MessagingNavigationInfo

  /**
   * Information on paging
   * Required
   */
  paging?: MessagingPagingInfo
}

export default GetMessageList
