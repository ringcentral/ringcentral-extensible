import CompanyPhoneNumberInfo from './CompanyPhoneNumberInfo';
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo';
import ProvisioningPagingInfo from './ProvisioningPagingInfo';

interface AccountPhoneNumbers {
  /**
   * Link to the list of account phone numbers
   */
  uri?: string;

  /**
   * List of account phone numbers
   */
  records?: CompanyPhoneNumberInfo[];

  /**
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   */
  paging?: ProvisioningPagingInfo;
}

export default AccountPhoneNumbers;
