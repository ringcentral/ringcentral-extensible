import type LocationInfo from './LocationInfo';
import type PageNavigationModel from './PageNavigationModel';
import type EnumeratedPagingModel from './EnumeratedPagingModel';

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
