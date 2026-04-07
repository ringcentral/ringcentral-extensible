import type GetMessageInfoResponse from "./GetMessageInfoResponse.js";
import type MessagingNavigationInfo from "./MessagingNavigationInfo.js";
import type MessagingPagingInfo from "./MessagingPagingInfo.js";

interface GetMessageList {
  /**
   * Link to a list of user messages
   * Format: uri
   */
  uri?: string;

  /**
   * List of records with message information
   * Required
   */
  records?: GetMessageInfoResponse[];

  /**
   * Required
   */
  navigation?: MessagingNavigationInfo;

  /**
   * Required
   */
  paging?: MessagingPagingInfo;
}

export default GetMessageList;
