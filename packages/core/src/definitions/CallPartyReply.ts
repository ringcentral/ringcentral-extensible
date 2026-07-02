import type ReplyWithPattern from "./ReplyWithPattern.js";

interface CallPartyReply {
  /**
   * Text to reply
   * Required
   */
  replyWithText?: string;

  /**
   * Required
   */
  replyWithPattern?: ReplyWithPattern;
}

export default CallPartyReply;
