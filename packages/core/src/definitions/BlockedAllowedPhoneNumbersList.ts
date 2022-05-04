import BlockedAllowedPhoneNumberInfo from './BlockedAllowedPhoneNumberInfo';
import CallHandlingNavigationInfo from './CallHandlingNavigationInfo';
import CallHandlingPagingInfo from './CallHandlingPagingInfo';

/**
 * List of blocked or allowed phone numbers
*/
class BlockedAllowedPhoneNumbersList {
  /**
   * Link to a list of blocked/allowed phone numbers resource
   */
  uri?: string;

  /**
   */
  records?: BlockedAllowedPhoneNumberInfo[];

  /**
   */
  navigation?: CallHandlingNavigationInfo;

  /**
   */
  paging?: CallHandlingPagingInfo;
}

export default BlockedAllowedPhoneNumbersList;
