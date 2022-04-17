import {
  UserPhoneNumberInfo,
  ProvisioningNavigationInfo,
  ProvisioningPagingInfo,
} from './index';

class GetExtensionPhoneNumbersResponse {
  /**
   * Link to the user's phone number list resource
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
