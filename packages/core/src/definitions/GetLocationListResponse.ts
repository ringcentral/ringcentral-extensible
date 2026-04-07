import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type LocationInfo from "./LocationInfo.js";
import type PageNavigationModel from "./PageNavigationModel.js";

interface GetLocationListResponse {
  /**
   * Link to the location list resource
   * Format: uri
   */
  uri?: string;

  /**
   * List of locations
   */
  records?: LocationInfo[];

  /**
   * Required
   */
  navigation?: PageNavigationModel;

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default GetLocationListResponse;
