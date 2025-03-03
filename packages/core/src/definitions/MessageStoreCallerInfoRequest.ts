/**
 * Message sender information. The `phoneNumber` value should be one
 * the account phone numbers allowed to send the current type of messages
 */
interface MessageStoreCallerInfoRequest {
  /**
   * Phone number in E.164 format
   * Required
   */
  phoneNumber?: string;
}

export default MessageStoreCallerInfoRequest;
