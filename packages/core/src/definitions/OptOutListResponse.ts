import OptOutResponse from "./OptOutResponse";
import NonEnumeratedPagingModel from "./NonEnumeratedPagingModel";

/**
 * The list of opt outs
 */
interface OptOutListResponse {
  /**
   * List of individual opt-out number records
   */
  records?: OptOutResponse[];

  /** */
  paging?: NonEnumeratedPagingModel;
}

export default OptOutListResponse;
