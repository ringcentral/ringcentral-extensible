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
}

export default MessageCreateRequest;
