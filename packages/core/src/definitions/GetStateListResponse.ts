import GetStateInfoResponse from './GetStateInfoResponse';
import PageNavigationModel from './PageNavigationModel';
import EnumeratedPagingModel from './EnumeratedPagingModel';

interface GetStateListResponse {
  /**
   * Link to a states list resource
   * Format: uri
   */
  uri?: string;

  /**
   * List of states
   */
  records?: GetStateInfoResponse[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default GetStateListResponse;
