import type MessageStoreCallerInfoResponseTo from "./MessageStoreCallerInfoResponseTo.js";

interface GetMessageForwardingInfo {
  /**
   */
  originalSender?: MessageStoreCallerInfoResponseTo;

  /**
   * Original message creation date/time in ISO 8601 format including timezone,
   *  for example 2016-03-10T18:07:52.534Z
   * Format: date-time
   */
  originalCreationTime?: string;
}

export default GetMessageForwardingInfo;
