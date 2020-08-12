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
   * Information on navigation
   */
  navigation?: CallHandlingNavigationInfo;

  /**
   * Information on paging
   */
  paging?: CallHandlingPagingInfo;
}

export default BlockedAllowedPhoneNumbersList;
