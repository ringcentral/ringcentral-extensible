// Query parameters for operation aggregateA2PSMSStatuses
class AggregateA2PSMSStatusesParameters {
  /**
   * Date to filter message list result. Messages with `creationTime` later than or equal to `dateFrom` value are returned. The default value is 1 day before the current datetime
   * Format: date-time
   */
  dateFrom?: string;

  /**
   * Date to filter message list result. Messages with `creationTime` earlier than `dateTo` value are returned. The default is the current datetime
   * Format: date-time
   */
  dateTo?: string;

  /**
   * Identifier of a message batch used for filtering records
   */
  batchId?: string;

  /**
   * Direction of a message to filter the message list result. By default there is no filter applied - both Inbound and Outbound messages are returned
   */
  direction?: 'Inbound' | 'Outbound';
}
export default AggregateA2PSMSStatusesParameters;
