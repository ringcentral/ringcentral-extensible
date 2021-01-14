class ListA2PsmsParameters {
  /**
   * Internal identifier of a message batch used for filtering records
   */
  batchId?: string;

  /**
   * Direction of a message to filter the message list result. By default there is no filter applied - both Inbound and Outbound messages are returned
   */
  direction?: 'Inbound' | 'Outbound';

  /**
   * Indicates if the response has to be detailed, includes text in the response if detailed
   * Default: Simple
   */
  view?: 'Simple' | 'Detailed';

  /**
   * Date to filter message list result. Messages with `creationTime` later than or equal to `dateFrom` value are returned. The default value is 1 day before the current datetime
   */
  dateFrom?: string;

  /**
   * Date to filter message list result. Messages with `creationTime` earlier than `dateTo` value are returned. The default is the current datetime
   */
  dateTo?: string;

  /**
   * List of phone numbers (specified in 'to' or 'from' fields of a message) to filter the results. Maximum number of phone numbers allowed to be specified as filters is 15
   */
  phoneNumber?: string[];

  /**
   * Token of a page to be retrieved
   */
  pageToken?: string;

  /**
   * Number of messages to be returned per request
   * Default: 1000
   */
  perPage?: number;
}

export default ListA2PsmsParameters;
