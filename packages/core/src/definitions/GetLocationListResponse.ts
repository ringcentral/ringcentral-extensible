import LocationInfo from "./LocationInfo";
import PageNavigationModel from "./PageNavigationModel";
import EnumeratedPagingModel from "./EnumeratedPagingModel";

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
