import type BlockedAllowedPhoneNumberInfo from './BlockedAllowedPhoneNumberInfo';
import type PageNavigationModel from './PageNavigationModel';
import type EnumeratedPagingModel from './EnumeratedPagingModel';

/**
 * List of blocked or allowed phone numbers
 */
interface BlockedAllowedPhoneNumbersList {
  /**
   * Link to a list of blocked/allowed phone numbers resource
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: BlockedAllowedPhoneNumberInfo[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default BlockedAllowedPhoneNumbersList;
