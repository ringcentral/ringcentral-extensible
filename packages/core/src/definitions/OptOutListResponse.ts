import type NonEnumeratedPagingModel from "./NonEnumeratedPagingModel.js";
import type OptOutResponse from "./OptOutResponse.js";

/**
 * The list of opt outs
 */
interface OptOutListResponse {
  /**
   * List of individual opt-out number records
   */
  records?: OptOutResponse[];

  /**
   */
  paging?: NonEnumeratedPagingModel;
}

export default OptOutListResponse;
