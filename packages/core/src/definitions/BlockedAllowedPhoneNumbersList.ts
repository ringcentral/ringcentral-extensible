import BlockedAllowedPhoneNumberInfo from "./BlockedAllowedPhoneNumberInfo.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

/**
 * List of blocked or allowed phone numbers
 */
interface BlockedAllowedPhoneNumbersList {
  /**
   * Link to a list of blocked/allowed phone numbers resource
   * Format: uri
   */
  uri?: string;

  /** */
  records?: BlockedAllowedPhoneNumberInfo[];

  /** */
  navigation?: PageNavigationModel;

  /** */
  paging?: EnumeratedPagingModel;
}

export default BlockedAllowedPhoneNumbersList;
