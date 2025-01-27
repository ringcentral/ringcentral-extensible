import UserPhoneNumberInfo from "./UserPhoneNumberInfo.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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
