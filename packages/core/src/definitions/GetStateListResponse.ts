import GetStateInfoResponse from "./GetStateInfoResponse.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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

  /** */
  navigation?: PageNavigationModel;

  /** */
  paging?: EnumeratedPagingModel;
}

export default GetStateListResponse;
