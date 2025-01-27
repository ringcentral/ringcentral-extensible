import CompanyPhoneNumberInfo from "./CompanyPhoneNumberInfo.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface AccountPhoneNumbers {
  /**
   * Link to a list of account phone numbers
   * Format: uri
   */
  uri?: string;

  /**
   * List of account phone numbers
   */
  records?: CompanyPhoneNumberInfo[];

  /** */
  navigation?: PageNavigationModel;

  /** */
  paging?: EnumeratedPagingModel;
}

export default AccountPhoneNumbers;
