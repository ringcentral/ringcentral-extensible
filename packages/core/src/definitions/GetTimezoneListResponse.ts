import type GetTimezoneInfoResponse from './GetTimezoneInfoResponse';
import type PageNavigationModel from './PageNavigationModel';
import type EnumeratedPagingModel from './EnumeratedPagingModel';

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
