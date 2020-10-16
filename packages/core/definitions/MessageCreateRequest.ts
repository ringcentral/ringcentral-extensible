// Single individual SMS resource
class MessageCreateRequest {
  /**
   * List of phone numbers in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format, recipients of this message. Currently only one number is supported
   * Required
   */
  to?: string[];

  /**
   * Text to send
   */
  text?: string;

  /**
   * Scheduled time to send this message. Overrides batch's `scheduledAt` attribute when sending
   */
  scheduledAt?: string;

  /**
   * Number of seconds since `scheduledAt` this message is relevant for. If more time than `expiresIn` has passed since `scheduledAt` (or current time, if no scheduled time specified) and the message has not been sent yet, it becomes discarded.
   */
  expiresIn?: number;
}

export default MessageCreateRequest;
