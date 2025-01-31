import GetTimezoneInfoResponse from "./GetTimezoneInfoResponse.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface GetTimezoneListResponse {
  /**
   * Link to the timezone list resource
   * Format: uri
   */
  uri?: string;

  /**
   * List of timezones
   * Required
   */
  records?: GetTimezoneInfoResponse[];

  /**
   * Required
   */
  navigation?: PageNavigationModel;

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default GetTimezoneListResponse;
