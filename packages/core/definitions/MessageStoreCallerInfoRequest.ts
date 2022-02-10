/**
 * Message sender information. The `phoneNumber` value should be one the account phone numbers allowed to send the current type of messages
 */
class MessageStoreCallerInfoRequest {
  /**
   * Phone number in E.164 format
   */
  phoneNumber?: string;
}
export default MessageStoreCallerInfoRequest;
