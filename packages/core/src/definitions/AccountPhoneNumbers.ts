import type CompanyPhoneNumberInfo from './CompanyPhoneNumberInfo';
import type PageNavigationModel from './PageNavigationModel';
import type EnumeratedPagingModel from './EnumeratedPagingModel';

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
