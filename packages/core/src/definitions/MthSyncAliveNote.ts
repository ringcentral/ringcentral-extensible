import type MthSyncAliveNoteAuthor from "./MthSyncAliveNoteAuthor.js";

interface MthSyncAliveNote {
  /**
   * Required
   */
  recordType?: "AliveNote";

  /**
   * Internal identifier of a note
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
   * Message last modification date/time
   * Required
   * Format: date-time
   */
  lastModifiedTime?: string;

  /**
   * Message or note text
   * Example: Hello, how are you doing today?
   */
  text?: string;

  /**
   * Thread note author
   */
  author?: MthSyncAliveNoteAuthor;
}

export default MthSyncAliveNote;
