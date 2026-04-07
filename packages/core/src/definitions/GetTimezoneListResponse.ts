import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type PageNavigationModel from "./PageNavigationModel.js";
import type TimezoneInfoBase from "./TimezoneInfoBase.js";

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
  records?: TimezoneInfoBase[];

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
