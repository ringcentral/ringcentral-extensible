import GetMessageInfoResponse from "./GetMessageInfoResponse.js";
import SyncInfoMessages from "./SyncInfoMessages.js";

interface GetMessageSyncResponse {
  /**
   * Link to the message sync resource
   * Format: uri
   */
  uri?: string;

  /**
   * List of message records with synchronization information
   * Required
   */
  records?: GetMessageInfoResponse[];

  /**
   * Required
   */
  syncInfo?: SyncInfoMessages;
}

export default GetMessageSyncResponse;
