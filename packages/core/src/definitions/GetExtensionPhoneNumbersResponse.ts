import UserPhoneNumberInfo from './UserPhoneNumberInfo';
import PageNavigationModel from './PageNavigationModel';
import EnumeratedPagingModel from './EnumeratedPagingModel';

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
