import type BlockedAllowedPhoneNumberInfo from "./BlockedAllowedPhoneNumberInfo.js";
import type PageNavigationModel from "./PageNavigationModel.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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
