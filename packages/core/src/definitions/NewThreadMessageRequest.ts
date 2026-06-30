import type MessagePhoneParty from "./MessagePhoneParty.js";

interface NewThreadMessageRequest {
  /**
   * Internal identifier of a message thread.
   *  If not specified, the thread will be assigned automatically based on phone numbers.
   *  If provided `threadId` is invalid (e.g. does not exist, already resolved, etc.), the API returns an error.
   */
  threadId?: string;

  /**
   * Required
   */
  from?: MessagePhoneParty;

  /**
   * Required
   */
  to?: MessagePhoneParty[];

  /**
   * Message or note text
   * Required
   * Example: Hello, how are you doing today?
   */
  text?: string;
}

export default NewThreadMessageRequest;
