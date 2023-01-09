import UserPhoneNumberInfo from './UserPhoneNumberInfo';
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo';
import ProvisioningPagingInfo from './ProvisioningPagingInfo';

interface GetExtensionPhoneNumbersResponse {
  /**
   * Link to the user phone number list resource
   * Format: uri
   */
  uri?: string;

  /**
   * List of phone numbers
   * Required
   */
  records?: UserPhoneNumberInfo[];

  /**
   * Required
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   * Required
   */
  paging?: ProvisioningPagingInfo;
}

export default GetExtensionPhoneNumbersResponse;
