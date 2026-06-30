import type MessageAttachmentResponseEntry from "./MessageAttachmentResponseEntry.js";
import type ThreadEntrySyncItemAuthor from "./ThreadEntrySyncItemAuthor.js";
import type ThreadEntrySyncItemInitiator from "./ThreadEntrySyncItemInitiator.js";
import type ThreadUserModel from "./ThreadUserModel.js";

interface ThreadEntrySyncItem {
  /**
   * Required
   */
  recordType?:
    | "AliveMessage"
    | "DeletedMessage"
    | "AliveNote"
    | "DeletedNote"
    | "ThreadCreatedHint"
    | "ThreadResolvedHint"
    | "ThreadDeletedHint"
    | "ThreadAssignedHint";

  /**
   * Internal identifier of a system message
   * Required
   */
  id?: string;

  /**
   * Internal identifier of a message thread
   * Required
   */
  threadId?: string;

  /**
   * Thread/message availability
   * Required
   */
  availability?: "Alive" | "Deleted";

  /**
   * Note creation date/time
   * Required
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Message direction (inbound or outbound)
   * Required
   */
  direction?: "Inbound" | "Outbound";

  /**
   * Last modification date/time (always the same as a creation time since the system hints are immutable)
   * Required
   * Format: date-time
   */
  lastModifiedTime?: string;

  /**
   * Message status. Different message types may have different
   *  allowed status values. For outbound faxes the aggregated message status
   *  is returned. If, for multi-recipient outbound message, a status for
   *  at least one recipient is `Queued`, then the `Queued` value is returned.
   *  If a status for at least one recipient is `SendingFailed`,
   *  then the 'SendingFailed' value is returned. In other cases,
   *  the `Sent` status is returned
   */
  messageStatus?:
    | "Queued"
    | "Sent"
    | "Delivered"
    | "DeliveryFailed"
    | "SendingFailed"
    | "Received";

  /**
   * Message or note text
   * Example: Hello, how are you doing today?
   */
  text?: string;

  /**
   * Message attachments (if any)
   */
  attachments?: MessageAttachmentResponseEntry[];

  /**
   * Thread note author
   */
  author?: ThreadEntrySyncItemAuthor;

  /**
   * Initiator of the action.
   *  Can be missing if the action was initiated by the system.
   */
  initiator?: ThreadEntrySyncItemInitiator;

  /**
   */
  assignee?: ThreadUserModel;

  /**
   */
  previousAssignee?: ThreadUserModel;
}

export default ThreadEntrySyncItem;
