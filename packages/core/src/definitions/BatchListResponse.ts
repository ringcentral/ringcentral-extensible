import MessageBatchResponse from "./MessageBatchResponse";
import NonEnumeratedPagingModel from "./NonEnumeratedPagingModel";

/**
 * The list of batches retrieved for an account and other filter criteria such as fromPhoneNumber, date specified in the request.
 */
interface BatchListResponse {
  /**
   * An array containing individual batches
   */
  records?: MessageBatchResponse[];

  /** */
  paging?: NonEnumeratedPagingModel;
}

export default BatchListResponse;
