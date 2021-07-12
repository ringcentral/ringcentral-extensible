import {
  BlockedAllowedPhoneNumberInfo,
  CallHandlingNavigationInfo,
  CallHandlingPagingInfo,
} from './index';

// List of blocked or allowed phone numbers
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
