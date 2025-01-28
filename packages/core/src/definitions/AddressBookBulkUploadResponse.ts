import AddressBookBulkUploadTaskResult from "./AddressBookBulkUploadTaskResult";

/**
 * Information on a task for adding multiple contacts to multiple extensions
 */
interface AddressBookBulkUploadResponse {
  /**
   * Internal identifier of a task
   * Required
   */
  id?: string;

  /**
   * Link for the task status retrieval
   * Required
   * Format: uri
   */
  uri?: string;

  /**
   * Task status
   * Required
   */
  status?: "Accepted" | "InProgress" | "Completed" | "Failed";

  /**
   * Date/time of a task creation
   * Required
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Date/time of a task latest update
   * Required
   * Format: date-time
   */
  lastModifiedTime?: string;

  /** */
  results?: AddressBookBulkUploadTaskResult;
}

export default AddressBookBulkUploadResponse;
