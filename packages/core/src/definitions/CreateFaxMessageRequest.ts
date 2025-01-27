import FaxReceiver from "./FaxReceiver.js";
import Attachment from "./Attachment.js";

/**
 * Request body for operation createFaxMessage
 */
interface CreateFaxMessageRequest {
  /**
   * Fax only. Resolution of a fax message. 'High' for black and
   *  white image scanned at 200 dpi, 'Low' for black and white image scanned
   *  at 100 dpi
   */
  faxResolution?: "High" | "Low";

  /**
   * Recipient's phone number(s)
   * Required
   */
  to?: FaxReceiver[];

  /**
   * Timestamp to send a fax at. If not specified, current or the past
   *  a fax message is sent immediately
   * Format: date-time
   */
  sendTime?: string;

  /**
   * Two-letter country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format
   * Example: US
   */
  isoCode?: string;

  /**
   * Cover page identifier. If `coverIndex` is set to '0' (zero) a cover page
   *  is not attached. For a list of available cover page identifiers (1-13)
   *  please call the Fax Cover Pages method. If not specified, the default cover
   *  page is attached (which is configured in 'Outbound Fax Settings')
   * Format: int32
   */
  coverIndex?: number;

  /**
   * Cover page text, entered by a fax sender and printed
   *  on a cover page. Maximum length is limited to 1024 symbols
   */
  coverPageText?: string;

  /**
   * Required
   */
  attachments?: Attachment[];
}

export default CreateFaxMessageRequest;
