import BlockedAllowedPhoneNumberInfo from './BlockedAllowedPhoneNumberInfo';
import NavigationInfo from './NavigationInfo';
import EnumeratedPaging from './EnumeratedPaging';

/**
 * List of blocked or allowed phone numbers
*/
interface BlockedAllowedPhoneNumbersList {
  /**
   * Link to a list of blocked/allowed phone numbers resource
   */
  uri?: string;

  /**
   */
  records?: BlockedAllowedPhoneNumberInfo[];

  /**
   */
  navigation?: NavigationInfo;

  /**
   */
  paging?: EnumeratedPaging;
}

export default BlockedAllowedPhoneNumbersList;
