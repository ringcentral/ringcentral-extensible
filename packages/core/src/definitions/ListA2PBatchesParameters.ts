/**
 * Query parameters for operation listA2PBatches
 */
interface ListA2PBatchesParameters {
  /**
   * The end of the time range to filter the results in ISO 8601 format including timezone. Default is the 'dateTo' minus 24 hours
   * Format: date-time
   * Example: Mon Nov 09 2020 08:07:52 GMT-0800 (Pacific Standard Time)
   */
  dateFrom?: string;

  /**
   * The end of the time range to filter the results in ISO 8601 format including timezone. Default is the current time
   * Format: date-time
   * Example: Wed Nov 25 2020 08:07:52 GMT-0800 (Pacific Standard Time)
   */
  dateTo?: string;

  /**
   * Phone number in E.164 format from which the messages are going to be sent
   * Example: 15551234455
   */
  from?: string;

  /**
   * A list of batch statuses to filter the results
   * Example: Queued,Processing
   */
  status?: ("Queued" | "Processing" | "Sent" | "Completed")[];

  /**
   * The page token of the page to be retrieved
   * Example: pgt1
   */
  pageToken?: string;

  /**
   * The number of records to be returned per page
   * Format: int64
   * Example: 1
   */
  perPage?: number;
}

export default ListA2PBatchesParameters;
