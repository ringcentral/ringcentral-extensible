import type MessageThreadAssignee from "./MessageThreadAssignee.js";
import type MessageThreadGuestParty from "./MessageThreadGuestParty.js";
import type MessageThreadOwnerParty from "./MessageThreadOwnerParty.js";
import type OwnerResource from "./OwnerResource.js";

interface MessageThread {
  /**
   * Thread ID
   * Required
   */
  id?: string;

  /**
   * Thread human-readable label
   */
  label?: string;

  /**
   * Thread status
   * Required
   */
  status?: "Open" | "Resolved";

  /**
   * Thread status transition reason (for threads in `Resolved` status only):
   *
   *  - `Manual` - the thread was resolved manually;
   *  - `ThreadExpired` - the thread was automatically resolved according to TTL settings;
   *  - `OwnerDeleted` - the thread owner's extension was deleted;
   *  - `OwnerPhoneNumberDeleted` - the thread owner's phone number this thread was created for was deleted.
   */
  statusReason?:
    | "Manual"
    | "ThreadExpired"
    | "OwnerDeleted"
    | "OwnerPhoneNumberDeleted";

  /**
   * Thread/message availability
   * Required
   */
  availability?: "Alive" | "Deleted";

  /**
   * Required
   */
  owner?: OwnerResource;

  /**
   * Thread owner phone number information
   */
  ownerParty?: MessageThreadOwnerParty;

  /**
   * Thread guest phone number information
   */
  guestParty?: MessageThreadGuestParty;

  /**
   * Cleared automatically when the thread is resolved or deleted
   */
  assignee?: MessageThreadAssignee;

  /**
   * Thread creation time
   * Required
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Thread last modification time
   * Required
   * Format: date-time
   */
  lastModifiedTime?: string;
}

export default MessageThread;
