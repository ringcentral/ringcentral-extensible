import CompanyPhoneNumberInfo from "./CompanyPhoneNumberInfo";
import PageNavigationModel from "./PageNavigationModel";
import EnumeratedPagingModel from "./EnumeratedPagingModel";

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
