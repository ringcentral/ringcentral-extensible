interface FaxResponseTo {
  /**
   * Internal identifier of a fax recipient
   */
  recipientId?: string;

  /**
   * Phone number in E.164 (with '+' sign) format
   * Example: +18661234567
   */
  phoneNumber?: string;

  /**
   * Name of a fax recipient listed on a fax cover page
   */
  name?: string;

  /**
   * Message status. Different message types may have different
   *  allowed status values. For outbound faxes the aggregated message status
   *  is returned. If, for outbound message, a status for at least one recipient is 'Queued', then
   *  the 'Queued' value is returned. If a status for at least one recipient is
   *  'SendingFailed', then the 'SendingFailed' value is returned. In other cases
   *  the 'Sent' status is returned
   */
  messageStatus?: 'Queued' | 'Sent' | 'Delivered' | 'DeliveryFailed' | 'SendingFailed' | 'Received';

  /**
   * Contains party location (city, state) if one can be determined
   *  from phoneNumber. This property is filled only when phoneNumber is not
   *  empty and server can calculate location information from it (for example,
   *  this information is unavailable for US toll-free numbers)
   */
  location?: string;
}

export default FaxResponseTo;
