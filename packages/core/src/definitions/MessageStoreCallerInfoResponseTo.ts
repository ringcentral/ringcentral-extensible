interface MessageStoreCallerInfoResponseTo {
  /**
   * Extension short number (usually 3 or 4 digits). This property
   *  is filled when parties communicate by means of short internal numbers,
   *  for example when calling to other extension or sending/receiving Company
   *  Pager messages
   */
  extensionNumber?: string;

  /** */
  extensionId?: string;

  /**
   * Contains party location (city, state) if one can be determined
   *  from a phone number. This property is filled only when `phoneNumber` is not
   *  empty and a server can calculate location information from it (for example,
   *  this information is unavailable for US toll-free numbers)
   */
  location?: string;

  /**
   * The `true` value specifies that message is sent exactly to this recipient.
   *  Returned in the `to` field for group MMS. Useful if one extension has several
   *  phone numbers'
   */
  target?: boolean;

  /**
   * Message status. Different message types may have different
   *  allowed status values. For outbound faxes the aggregated message status
   *  is returned. If, for outbound message, a status for at least one recipient is 'Queued', then
   *  the 'Queued' value is returned. If a status for at least one recipient is
   *  'SendingFailed', then the 'SendingFailed' value is returned. In other cases
   *  the 'Sent' status is returned
   */
  messageStatus?:
    | "Queued"
    | "Sent"
    | "Delivered"
    | "DeliveryFailed"
    | "SendingFailed"
    | "Received";

  /** */
  faxErrorCode?:
    | "AllLinesInUse"
    | "Undefined"
    | "NoFaxSendPermission"
    | "NoInternationalPermission"
    | "NoFaxMachine"
    | "NoAnswer"
    | "LineBusy"
    | "CallerHungUp"
    | "NotEnoughCredits"
    | "SentPartially"
    | "InternationalCallingDisabled"
    | "DestinationCountryDisabled"
    | "UnknownCountryCode"
    | "NotAccepted"
    | "InvalidNumber"
    | "CallDeclined"
    | "TooManyCallsPerLine"
    | "CallFailed"
    | "RenderingFailed"
    | "TooManyPages"
    | "ReturnToDBQueue"
    | "NoCallTime"
    | "WrongNumber"
    | "ProhibitedNumber"
    | "InternalError"
    | "FaxSendingProhibited"
    | "ThePhoneIsBlacklisted"
    | "UserNotFound"
    | "ConvertError"
    | "DBGeneralError"
    | "SkypeBillingFailed"
    | "AccountSuspended"
    | "ProhibitedDestination"
    | "InternationalDisabled";

  /**
   * Symbolic name associated with a party. If the phone does not
   *  belong to the known extension, only the location is returned, the name
   *  is not determined then
   */
  name?: string;

  /**
   * Phone number of a party. Usually it is a plain number including
   *  country and area code like 18661234567. But sometimes it could be returned
   *  from database with some formatting applied, for example (866)123-4567.
   *  This property is filled in all cases where parties communicate by means
   *  of global phone numbers, for example when calling to direct numbers or
   *  sending/receiving SMS
   */
  phoneNumber?: string;

  /**
   * Internal identifier of a message recipient
   */
  recipientId?: string;
}

export default MessageStoreCallerInfoResponseTo;
