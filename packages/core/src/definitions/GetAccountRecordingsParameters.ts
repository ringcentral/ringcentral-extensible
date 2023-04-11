/**
 * Query parameters for operation getAccountRecordings
*/
interface GetAccountRecordingsParameters {
  /**
   * Token to get the next page
   */
  pageToken?: string;

  /**
   * Number of records returned
   * Format: int32
   */
  perPage?: number;
}

export default GetAccountRecordingsParameters;
