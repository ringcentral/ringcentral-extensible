import type GetStateInfoResponse from "./GetStateInfoResponse";
import type PageNavigationModel from "./PageNavigationModel";
import type EnumeratedPagingModel from "./EnumeratedPagingModel";

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
