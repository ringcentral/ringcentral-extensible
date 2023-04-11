import GetTimezoneInfoResponse from './GetTimezoneInfoResponse';
import PageNavigationModel from './PageNavigationModel';
import EnumeratedPagingModel from './EnumeratedPagingModel';

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
