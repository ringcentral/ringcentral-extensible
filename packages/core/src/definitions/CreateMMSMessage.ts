import MessageStoreCallerInfoRequest from "./MessageStoreCallerInfoRequest.js";
import SmsRequestCountryInfo from "./SmsRequestCountryInfo.js";
import Attachment from "./Attachment.js";

interface CreateMMSMessage {
  /**
   * Required
   */
  from?: MessageStoreCallerInfoRequest;

  /**
   * Message receiver(s) information. The `phoneNumber` value is required
   * Required
   */
  to?: MessageStoreCallerInfoRequest[];

  /**
   * Text of a message. Max length is 1000 symbols (2-byte UTF-16
   *  encoded). If a character is encoded in 4 bytes in UTF-16 it is treated
   *  as 2 characters, thus restricting the maximum message length to 500 symbols
   */
  text?: string;

  /** */
  country?: SmsRequestCountryInfo;

  /**
   * Media file(s) to upload
   * Required
   */
  attachments?: Attachment[];
}

export default CreateMMSMessage;
