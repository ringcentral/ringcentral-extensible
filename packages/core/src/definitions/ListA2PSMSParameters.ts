/**
 * Query parameters for operation listA2PSMS
*/
interface ListA2PSMSParameters {
  /**
   * Internal identifier of a message batch to filter the response
   * Example: 55577
   */
  batchId?: string;

  /**
   * Direction of the SMS message
   * Example: Inbound
   */
  direction?: ('Inbound' | 'Outbound');

  /**
   * The end of the time range to filter the results in ISO 8601 format including timezone. Default is the 'dateTo' minus 24 hours
   * Format: date-time
   * Example: 2020-11-09T16:07:52.597Z
   */
  dateFrom?: string;

  /**
   * The end of the time range to filter the results in ISO 8601 format including timezone. Default is the current time
   * Format: date-time
   * Example: 2020-11-25T16:07:52.597Z
   */
  dateTo?: string;

  /**
   * Indicates if the response has to be detailed, includes text in the response if detailed
   * Default: Simple
   */
  view?: ('Simple' | 'Detailed');

  /**
   * List of phone numbers (specified in 'to' or 'from' fields of a message) to filter the results. Maximum number of phone numbers allowed to be specified as filters is 15
   * Example: 15551234455,15551235577
   */
  phoneNumber?: string[];

  /**
   * The page token of the page to be retrieved.
   * Example: pgt1
   */
  pageToken?: string;

  /**
   * The number of messages to be returned per request
   * Format: int32
   * Example: 1
   * Default: 1000
   */
  perPage?: number;
}

export default ListA2PSMSParameters;
