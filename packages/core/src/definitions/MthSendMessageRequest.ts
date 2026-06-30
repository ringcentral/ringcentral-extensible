import type Attachment from "./Attachment.js";
import type NewThreadMessageRequest from "./NewThreadMessageRequest.js";

/**
 * Request body for operation mthSendMessage
 */
interface MthSendMessageRequest {
  /**
   * Required
   */
  metadata?: NewThreadMessageRequest;

  /**
   * Required
   */
  attachments?: Attachment[];
}

export default MthSendMessageRequest;
