import {MessageStoreCalleeInfoRequest, Attachment} from './index';

// Request body for operation createFaxMessage
class CreateFaxMessageRequest {
  /**
   * Resolution of Fax
   */
  faxResolution?: 'High' | 'Low';

  /**
   * To Phone Number
   * Required
   */
  to?: MessageStoreCalleeInfoRequest[];

  /**
   * Timestamp to send fax at. If not specified (current or the past), the fax is sent immediately
   * Format: date-time
   */
  sendTime?: string;

  /**
   * ISO Code. e.g UK
   */
  isoCode?: string;

  /**
   * Cover page identifier. For the list of available cover page identifiers please call the method Fax Cover Pages. If not specified, the default cover page which is configured in 'Outbound Fax Settings' is attached
   * Format: int32
   */
  coverIndex?: number;

  /**
   * Cover page text, entered by the fax sender and printed on the cover page. Maximum length is limited to 1024 symbols
   */
  coverPageText?: string;

  /**
   * File to upload
   * Required
   * Format: binary
   */
  attachments?: Attachment[];
}

export default CreateFaxMessageRequest;
