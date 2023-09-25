import type UserPhoneNumberInfo from './UserPhoneNumberInfo';
import type PageNavigationModel from './PageNavigationModel';
import type EnumeratedPagingModel from './EnumeratedPagingModel';

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
  navigation?: PageNavigationModel;

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default GetExtensionPhoneNumbersResponse;
