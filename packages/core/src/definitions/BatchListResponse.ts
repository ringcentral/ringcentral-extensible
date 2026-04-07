import type MessageBatchResponse from "./MessageBatchResponse.js";
import type NonEnumeratedPagingModel from "./NonEnumeratedPagingModel.js";

/**
 * The list of batches retrieved for an account and other filter criteria such as
 * fromPhoneNumber, date specified in the request.
 *
 */
interface BatchListResponse {
  /**
   * An array containing individual batches
   */
  records?: MessageBatchResponse[];

  /**
   */
  paging?: NonEnumeratedPagingModel;
}

export default BatchListResponse;
