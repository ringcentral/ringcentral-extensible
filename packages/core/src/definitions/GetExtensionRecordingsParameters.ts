/**
 * Query parameters for operation getExtensionRecordings
 */
interface GetExtensionRecordingsParameters {
  /**
   * The token indicating the particular page of the result set to be retrieved.
   *  If omitted the first page will be returned.
   */
  pageToken?: string;

  /**
   * The number of items per page. If provided value in the request
   *  is greater than a maximum, the maximum value is applied
   * Format: int32
   */
  perPage?: number;
}

export default GetExtensionRecordingsParameters;
