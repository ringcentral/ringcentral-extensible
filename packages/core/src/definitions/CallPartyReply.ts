import ReplyWithPattern from "./ReplyWithPattern.js";

interface CallPartyReply {
  /**
   * Text to reply
   */
  replyWithText?: string;

  /** */
  replyWithPattern?: ReplyWithPattern;
}

export default CallPartyReply;
