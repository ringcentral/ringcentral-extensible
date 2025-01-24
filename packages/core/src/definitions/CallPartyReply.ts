import type ReplyWithPattern from "./ReplyWithPattern";

interface CallPartyReply {
  /**
   * Text to reply
   */
  replyWithText?: string;

  /** */
  replyWithPattern?: ReplyWithPattern;
}

export default CallPartyReply;
