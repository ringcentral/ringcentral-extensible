import type CompanyPhoneNumberInfo from "./CompanyPhoneNumberInfo.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type PageNavigationModel from "./PageNavigationModel.js";

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

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default AccountPhoneNumbers;
